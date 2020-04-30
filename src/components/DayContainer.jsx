import React from 'react';
import styled from '@emotion/styled';
import index from '../data/index.json';

const DayWrapper = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Day = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid transparent;
    background: ${(props) => (props.today === true ? '#296d98' : '')};
    &:hover {
        border: 1px solid white;
        cursor: pointer;
    }
`;

const EventsContainer = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    // visibility: hidden;
    align-items: center;
    justify-content: center;
`;

const Event = styled.div`
    width: 15%;
    height: 50%;
    background: red;
`;

const DayContainer = (props) => {
    const { year, month, day, TODAY } = props;
    return (
        <Day today={`${year}-${month}-${day}` === TODAY}>
            <DayWrapper>
                <span>{day}</span>
            </DayWrapper>
            {day && (
                <EventsContainer>
                    {index.map((event) => {
                        if (
                            event.start.slice(0, 10) ===
                            `${year}-${month < 10 ? '0' + month : month}-${day}`
                        ) {
                            return <Event key={event.start} />;
                        } else {
                            return '';
                        }
                    })}
                </EventsContainer>
            )}
        </Day>
    );
};
export default DayContainer;
