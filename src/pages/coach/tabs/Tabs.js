import classes from './Tabs.module.css';
import {useState} from "react";
import Overview from "./overview/Overview";
import Plans from "./plans/Plans";

const tabs = {
    Overview: 'Overview',
    Plans: 'Plans'
}

const Tabs = ({coach}) => {

    const [selectedTab, setSelectedTab] = useState(tabs.Overview);

    return (
        <div className={classes.Container}>
            <div className={classes.Tabs}>
                {Object.entries(tabs).map(([_,tab]) => (
                    <div className={classes.TabContainer}>
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
                <Plans coach={coach}/>
            )}
        </div>
    )
}

export default Tabs;