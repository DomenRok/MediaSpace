import React, {useEffect} from "react";
import {Link} from 'react-router-dom';
import {SideBarNav} from "./SidebarNav";
import {connect} from "react-redux";
import {logout} from "../actions/auth";
import $ from "jquery";
import "jquery-asRange";

interface MovieDetail{
	movieinfo: any
}

const MovieProfileRating: React.FC<MovieDetail> = (props: MovieDetail) => {

        return (
            <>
            <div id="movie-detail-rating">
				<div className="dashboard-container">
					<div className="row">
						<div className="col-sm">
							<h5>Rate {props.movieinfo.title}</h5>
							
							<div className="rating-pro">
   							  <label>
   							    <input type="radio" name="rating-pro" value="10" title="10 stars" /> 10
   							  </label>
  							  <label>
  							    <input type="radio" name="rating-pro" value="9" title="9 stars" /> 9
  							  </label>
  							  <label>
  							    <input type="radio" name="rating-pro" value="8" title="8 stars" /> 8
  							  </label>
  							  <label>
  							    <input type="radio" name="rating-pro" value="7" title="7 stars" /> 7
  							  </label>
 							  <label>
 							    <input type="radio" name="rating-pro" value="6" title="6 stars" /> 6
 							  </label>
							  <label>
							    <input type="radio" name="rating-pro" value="5" title="5 stars" /> 5
							  </label>
							  <label>
							    <input type="radio" name="rating-pro" value="4" title="4 stars" /> 4
							  </label>
							  <label>
							    <input type="radio" name="rating-pro" value="3" title="3 stars" /> 3
							  </label>
							  <label>
							    <input type="radio" name="rating-pro" value="2" title="2 stars" /> 2
							  </label>
							  <label>
							    <input type="radio" name="rating-pro" value="1" title="1 star" /> 1
							  </label>
							</div>
							
						</div>
						<div className="col-sm">
							<h6>User Rating</h6>
					      <div
					        className="circle-rating-pro"
					        data-value="0.86"
					        data-animation-start-value="0.86"
					        data-size="40"
					        data-thickness="3"
					        data-fill="{
					          &quot;color&quot;: &quot;#42b740&quot;
					        }"
					        data-empty-fill="#def6de"
					        data-reverse="true"
					      ><span className="c42b740">8.6</span></div>
							<div className="clearfix"></div>
						</div>
					</div>{/*<!-- close .row -->*/}
				</div>{/*<!-- close .dashboard-container -->*/}
			</div>{/*<!-- close #movie-detail-rating --></label>*/}
            </>
        );

};

const mapStateToProps = (state:any) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    };
}
export default connect(mapStateToProps,null)(MovieProfileRating);