package com.assignment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import com.assignment.service.UserService;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	
	
	@Autowired
	private UserService userService;
	  @Override
	    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		  auth.userDetailsService(userService);
	    }

	   /* @Override
	    protected void configure(HttpSecurity http) throws Exception {
	    	http
	    	.csrf().disable()
            .authorizeRequests()
                .antMatchers("/**").hasRole("USER")
                .and()
            .formLogin().loginPage("/login").permitAll();
	    	
	    }*/

		@Override
		protected void configure(HttpSecurity http) throws Exception {
			http
			.httpBasic().and()
			.logout().logoutRequestMatcher(new AntPathRequestMatcher("/logout")).logoutSuccessUrl("/#/home")
			.and()
			.authorizeRequests().antMatchers("/","/**", "/index.html", "/login.html").permitAll().anyRequest()
			.authenticated().and().csrf().disable();
		}
	    
}