import React, {Component} from "react";
import {Navigator} from "../../components";

export default class Home extends Component<any, any>{
    public render() {
        return <div>
            <Navigator/>
            <div id="Layout">
                <div id="Sidebar">
                    <div id="SidebarTitle">폴더</div>
                    <div>
                        <div id="ListItem">
                            {/*<Link to="/memo">메모</Link>*/}
                        </div>
                        <div id="ListItem">
                            {/*<Link to="/trash">휴지통</Link>*/}
                        </div>
                    </div>
                </div>
                <div id="Main">
                    <div style={{
                        margin: '10px'
                    }}><div id="AddMemoBtn" /></div>
                </div>
            </div>
        </div>
    }
}