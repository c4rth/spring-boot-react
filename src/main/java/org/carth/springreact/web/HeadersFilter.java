package org.carth.springreact.web;

import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.function.Consumer;

@Slf4j
public class HeadersFilter extends OncePerRequestFilter {
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String path = request.getRequestURI();
        if (path.startsWith("/api")) {
            var headerNames = request.getHeaderNames();
            StringBuilder sb = new StringBuilder();
            headerNames.asIterator().forEachRemaining(header -> sb.append(header).append("=").append(request.getHeader(header)).append(","));
            log.info("headers: {}", sb);
            var xApiKey = request.getHeader("x-api-key");
            if (xApiKey == null) {
                log.error("Invalid caller");
                throw new BadCredentialsException("Invalid caller");
            }
        }
        filterChain.doFilter(request, response);
    }
}