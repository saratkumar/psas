import { Button } from "@mui/material";
import React from "react";
import { Fragment } from "react";

import classpackage from "../../images/package.png"
import { PACKAGES } from "./packages.constant";
import "./Schedule.css";
const Schedule = () => {


    return (

        <Fragment>
            {/* <div style={{ width: "100%", height: "100%" }}>
                <img src={classpackage} width="100%" height="80%" />
            </div> */}
            <div className="price">
                <h4> PACKAGES </h4>

                <div class="container">
                    {PACKAGES.map((el) => {
                        return(
                            <div class="column">
                                <div className="packageName"> {el.name} </div>
                                <hr />
                                <p>SGD <span class="pricevalue">{el.price}</span></p>
                                <p>/ {el.duration}</p>
                                <hr />
                                <p> 16 - 19 Trainings</p>
                                <p> Valid for 1 Month</p>

                                <Button variant="outlined">Subscribe</Button>
                            </div>
                        )
                    })}
                </div>
            </div>

        </Fragment>
    )
};

export default Schedule;