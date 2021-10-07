import './seasonStyle.css';
// import react from 'react';

const getCurrentSeason = (latitude, month) => {
    if(month > 2 && month < 9){
        return latitude > 0? "summer": "winter";
    }
    else{
        return latitude > 0 ? "winter" : "summer";
    }
}

const seasonConfig = {
    'summer' : {
        icon: 'sun',
        text: "Let's hit the Beach"
    },
    'winter' : {
        icon: 'snowflake',
        text: "burrr! It's chilli"
    }
}

const season = (props) => {
    const currentSeason = getCurrentSeason(props.lat, new Date().getMonth());
    // const text = currentSeason === "summer"? "Let's hit the Beach!": "Burr! It's chilly";
    // const icon = currentSeason === "summer" ? "sun" : "snowflake";
    const {icon, text} = seasonConfig[currentSeason];
    // console.log(props.lat);
    return <div className={`season-display ${currentSeason}`}>
        <i className={`top-left massive ${icon} icon`} />
        <h1 className='content'>{text}</h1>
        <i className={`bottom-right massive ${icon} icon`} />
    </div>;
}

export default season;