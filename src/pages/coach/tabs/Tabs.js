import classes from './Tabs.module.css';
import React, {useState} from "react";
import Overview from "./overview/Overview";
import Previews from "./previews/Previews";
import PlanCategories from "../../../components/plan-categories/PlanCategories";

const tabs = {
    Overview: 'Overview',
    Plans: 'Pricing and Plans',
    Previews: 'Previews'
}

const Tabs = ({coach}) => {

    const [selectedTab, setSelectedTab] = useState(tabs.Overview);

    return (
        <div className={classes.Container}>
            <div className={classes.Tabs}>
                {Object.entries(tabs).map(([_,tab]) => (
                    <div className={classes.TabContainer} key={tab}>
                        <div className={selectedTab === tab ? [classes.Tab, classes.TabActive].join(' ') : classes.Tab}
                             onClick={() => setSelectedTab(tab)}>
                            {tab}
                        </div>
                        <div className={selectedTab === tab ? [classes.Underline, classes.UnderlineActive].join(' ') : classes.Underline}/>
                    </div>
                ))}
            </div>
            {selectedTab === tabs.Overview && (
                <Overview coach={coach}/>
            )}
            {selectedTab === tabs.Plans && (
                <PlanCategories coach={coach} />
            )}
            {selectedTab === tabs.Previews && (
                <Previews coach={coach} />
            )}
        </div>
    )
}

export default Tabs;
