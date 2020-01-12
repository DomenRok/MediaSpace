import React from "react";
import {Link} from "react-router-dom";
interface MovieItemProps {
    title: string,
    rating: number,
    id: number,
    image: string
}

const MovieItem: React.FC<MovieItemProps> = (props: MovieItemProps) => {
    return (
        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <div className="item-listing-container-skrn">
                <Link to={"/browse/"+props.id}><img src={props.image} alt="Listing"/></Link>
                <div className="item-listing-text-skrn">
                    <div className="item-listing-text-skrn-vertical-align"><h6><Link to={"/browse/"+props.id}>
                        {props.title}</Link></h6>
                        <div
                            className="circle-rating-pro"
                            data-value="0.86"
                            data-animation-start-value="0.86"
                            data-size="32"
                            data-thickness="3"
                            data-fill="{
							          &quot;color&quot;: &quot;#42b740&quot;
							        }"
                            data-empty-fill="#def6de"
                            data-reverse="true"
                        ><span style={{color:"#42b740"}}>8.6</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MovieItem;