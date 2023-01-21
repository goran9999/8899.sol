import { Program } from "@project-serum/anchor";
import React, { FC, useEffect, useState } from "react";
import { IEvent, IProgramData } from "../../../../interface/programs.interface";
import { parseEventData } from "../../../../utilities/helpers";
import "./EventItem.scss";
const EventItem: FC<{
  event: IEvent;
  program: Program;
  emitEvent: () => void;
}> = ({ event, program, emitEvent }) => {
  const [eventLogs, setEventLogs] = useState("");

  useEffect(() => {
    program.addEventListener(event.name, (e, _slot) => {
      setEventLogs(parseEventData(e));
      emitEvent();
    });
  }, []);

  return (
    <div className="event-item">
      <div className="event-item__info">
        <h3>{event.name}</h3>
        <p>{JSON.stringify(event.fields)}</p>
      </div>
      <div className="event-item__info">
        <p>Logs</p>
        <textarea value={eventLogs} />{" "}
      </div>
    </div>
  );
};

export default EventItem;
