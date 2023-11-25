package org.carth.springreact.web;

import com.microsoft.graph.models.ProfilePhoto;
import com.microsoft.graph.models.User;
import com.microsoft.graph.requests.AppRoleAssignmentCollectionPage;
import com.microsoft.graph.requests.DirectoryObjectCollectionWithReferencesPage;
import com.microsoft.graph.requests.GraphServiceClient;
import io.swagger.v3.oas.annotations.Parameter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.compress.utils.IOUtils;
import org.carth.springreact.service.MsGraphUtilities;
import org.springframework.http.MediaType;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.annotation.RegisteredOAuth2AuthorizedClient;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.InputStream;

@RestController
@RequestMapping("/api/msgraph")
@RequiredArgsConstructor
@Slf4j
public class MsGraphController {

    /*
    @GetMapping()
    public void get(@RegisteredOAuth2AuthorizedClient("graph") OAuth2AuthorizedClient graphMsalClient) {
        final String graphAccessToken = graphMsalClient.getAccessToken().getTokenValue();
        var jsonResultFromGraph = WebClient.create().get()
                .uri("https://graph.microsoft.com/v1.0/applications/" + myAppRegistrationObjectId)
                .header(HttpHeaders.AUTHORIZATION, "Bearer " + graphAccessToken)
                .retrieve()
                .bodyToMono(JsonNode.class);
    }*/

    private GraphServiceClient getGraphServiceClient(OAuth2AuthorizedClient graphAuthorizedClient) {
        return MsGraphUtilities.getGraphServiceClient(graphAuthorizedClient);
    }

    @GetMapping("principal")
    public OidcUser getPrincipal(@Parameter(hidden = true) @AuthenticationPrincipal OidcUser principal) {
        var x = principal;
        log.info("principal {} ", x);
        return principal;
    }

    @GetMapping()
    public User me(@Parameter(hidden = true)@RegisteredOAuth2AuthorizedClient("graph") OAuth2AuthorizedClient graphAuthorizedClient) {
        final GraphServiceClient graphServiceClient = getGraphServiceClient(graphAuthorizedClient);
        final User user = graphServiceClient.me().buildRequest().get();
        return user;
    }

    @GetMapping("profilephoto")
    public ProfilePhoto getProfilePhoto(@Parameter(hidden = true) @RegisteredOAuth2AuthorizedClient("graph") OAuth2AuthorizedClient graphAuthorizedClient) {
        final GraphServiceClient graphServiceClient = getGraphServiceClient(graphAuthorizedClient);
        final ProfilePhoto profilePhoto = graphServiceClient.me().photo().buildRequest().get();
        return profilePhoto;
    }

    @GetMapping("photo")
    public void getImageAsByteArray(@Parameter(hidden = true)HttpServletResponse response,
                                    @Parameter(hidden = true)@RegisteredOAuth2AuthorizedClient("graph") OAuth2AuthorizedClient graphAuthorizedClient) throws IOException {
        final GraphServiceClient graphServiceClient = getGraphServiceClient(graphAuthorizedClient);
        final InputStream stream = graphServiceClient.me().photo().content().buildRequest().get();
        response.setContentType(MediaType.IMAGE_JPEG_VALUE);
        IOUtils.copy(stream, response.getOutputStream());
    }

    @GetMapping("memberof")
    public DirectoryObjectCollectionWithReferencesPage getMemberOf(@Parameter(hidden = true) @RegisteredOAuth2AuthorizedClient("graph") OAuth2AuthorizedClient graphAuthorizedClient) {
        final GraphServiceClient graphServiceClient = getGraphServiceClient(graphAuthorizedClient);
        final DirectoryObjectCollectionWithReferencesPage memberOf = graphServiceClient.me().memberOf().buildRequest().select("id,displayName").get();
        return memberOf;
    }

    @GetMapping("appRoleAssignments")
    public AppRoleAssignmentCollectionPage getAppRoleAssignments(@Parameter(hidden = true) @RegisteredOAuth2AuthorizedClient("graph") OAuth2AuthorizedClient graphAuthorizedClient) {
        final GraphServiceClient graphServiceClient = getGraphServiceClient(graphAuthorizedClient);
        final AppRoleAssignmentCollectionPage appRoleAssignmentCollectionPage = graphServiceClient.me().appRoleAssignments().buildRequest().get();
        return appRoleAssignmentCollectionPage;
    }
}
