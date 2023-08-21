import React from "react";
import TopContributors from "../features/TopContributors";

const SideBar = () => {
    return (
        <div>
            <ul>
                <li>
                    <div>
                        <img src="" alt="fire-extingusher"/>
                        <p>
                            Hot
                        </p>
                    </div>
                </li>
                <li>
                    <div>
                        <img src="" alt="news-paper"/>
                        <p>
                            New
                        </p>
                    </div>
                </li>
                <li>
                    <div>
                        <img src="" alt="move-to-top"/>
                        <p>
                            Rising
                        </p>
                    </div>
                </li>
                <li>
                    <div>
                        <img src="" alt="trophy"/>
                        <p>
                            Top
                        </p>
                    </div>
                </li>
                <li>
                    <div>
                        <img src="" alt="Gold-nuggets"/>
                        <p>
                            Gilded
                        </p>
                    </div>
                </li>
                <li>
                    <div>
                        <img src="" alt="graduation-hat"/>
                        <p>
                            Wiki
                        </p>
                    </div>
                </li>
                <li>
                    <div>
                        <img src="" alt="heart"/>
                        <p>
                            Favs
                        </p>
                    </div>
                </li>
            </ul>

            <div>
                <TopContributors />
            </div>

            <div>

            </div>


        </div>
    )
};

export default SideBar;
