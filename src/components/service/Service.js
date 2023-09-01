import { Fragment } from "react";
import "./Service.css";

import service1 from "../../images/services/boxing.jpg";

import service2 from "../../images/services/corporate.jpg";

import service3 from "../../images/services/running.jpg";

const Service = () => {


    return (
        <Fragment>
            <div className="service">
                <div className="container ">
                    <div className="box image-background img-left">
                        <img src={service1} class="alt" alt="an old city" />
                    </div>
                    <div className="box text-align-left">
                        <h4>Corporate Packages</h4>

                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                </div>
                <div className="container">
                    <div className="box text-align-left pl-15">
                        <h4>Boxing and cardio exercises</h4>

                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                    <div className="box image-background img-right">
                        <img src={service2} class="alt" alt="an old city" />
                    </div>
                </div>

                <div className="container">
                    <div className="box image-background img-left">
                        <img src={service3} class="alt" alt="an old city" />
                    </div>
                    <div className="box text-align-left">
                        <h4>Running workshop with progression plan from Beginner to Advanced</h4>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                </div>

                <div className="container">
                    <div className="box text-align-left pl-15">
                        <h4>Mental Health Awareness Course</h4>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                    <div className="box image-background img-right">
                        <img src={service2} class="alt" alt="an old city" />
                    </div>
                </div>

                <div className="container">
                    <div className="box image-background img-left">
                        <img src={service3} class="alt" alt="an old city" />
                    </div>
                    <div className="box text-align-left">
                        <h4>Counselling and Hypnotherapy (individual & group sessions)</h4>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        <sub>
                            <b>PS: Please note that hypnosis can / will be only done if the client feels comfortable. Counselling can be done separately, of course.</b>
                        </sub>
                    </div>
                </div>
                <div className="container">
                    <div className="box text-align-left pl-15">
                        <h4>Performance Coaching</h4>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                    <div className="box image-background img-right">
                        <img src={service2} class="alt" alt="an old city" />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Service;
