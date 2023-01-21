import React, { FC } from "react";
import { IProgramData } from "../../../interface/programs.interface";
import EventItem from "./EventItem/EventItem";
import "./Events.scss";
const Events: FC<{ program: IProgramData; emitEvent: () => void }> = ({
  program,
  emitEvent,
}) => {
  return (
    <div className="events">
      {program.events.length > 0 ? (
        program.events.map((ev, index) => {
          return (
            <EventItem
              event={ev}
              program={program.program}
              key={ev.name}
              emitEvent={emitEvent}
            />
          );
        })
      ) : (
        <div className="events__no-data">
          <h2>No events in your program</h2>
        </div>
      )}
    </div>
  );
};

export default Events;
