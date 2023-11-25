package org.carth.springreact.service;

import com.microsoft.graph.authentication.BaseAuthenticationProvider;
import com.microsoft.graph.logger.DefaultLogger;
import com.microsoft.graph.logger.LoggerLevel;
import com.microsoft.graph.requests.GraphServiceClient;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;

import javax.annotation.Nonnull;
import java.net.URL;
import java.util.concurrent.CompletableFuture;

public class MsGraphUtilities {
    private MsGraphUtilities() {
        throw new IllegalStateException("Utility class. Don't instantiate");
    }

    /**
     * getGraphServiceClient prepares and returns a graphServiceClient to make API calls to
     * Microsoft Graph. See docs for GraphServiceClient (GraphSDK for Java v3).
     * <p>
     * Since the app handles token acquisition through AAD boot starter, we can give GraphServiceClient
     * the ability to use this access token when it requires it. In order to do this, we must create a
     * custom AuthenticationProvider (GraphAuthenticationProvider, see below).
     *
     * @param graphAuthorizedClient OAuth2AuthorizedClient created by AAD Boot starter. Used to surface the access token.
     * @return GraphServiceClient GraphServiceClient
     */

    public static GraphServiceClient getGraphServiceClient(@Nonnull OAuth2AuthorizedClient graphAuthorizedClient) {
        var logger = new DefaultLogger();
        logger.setLoggingLevel(LoggerLevel.DEBUG);
        return GraphServiceClient.builder()
                .authenticationProvider(new GraphAuthenticationProvider(graphAuthorizedClient))
                .logger(logger)
                .buildClient();
    }

    /**
     * Sample GraphAuthenticationProvider class. An Authentication provider is required for setting up a
     * GraphServiceClient. This one extends BaseAuthenticationProvider which in turn implements IAuthenticationProvider.
     * This allows using an Access Token provided by Oauth2AuthorizationClient.
     */
    private static class GraphAuthenticationProvider extends BaseAuthenticationProvider {

        private final OAuth2AuthorizedClient graphAuthorizedClient;

        /**
         * Set up the GraphAuthenticationProvider. Allows accessToken to be
         * used by GraphServiceClient through the interface IAuthenticationProvider
         *
         * @param graphAuthorizedClient OAuth2AuthorizedClient created by AAD Boot starter. Used to surface the access token.
         */
        public GraphAuthenticationProvider(@Nonnull OAuth2AuthorizedClient graphAuthorizedClient) {
            this.graphAuthorizedClient = graphAuthorizedClient;
        }

        /**
         * This implementation of the IAuthenticationProvider helps injects the Graph access
         * token into the headers of the request that GraphServiceClient makes.
         *
         * @param requestUrl the outgoing request URL
         * @return a future with the token
         */
        @Override
        public CompletableFuture<String> getAuthorizationTokenAsync(@Nonnull final URL requestUrl) {
            return CompletableFuture.completedFuture(graphAuthorizedClient.getAccessToken().getTokenValue());
        }
    }
}