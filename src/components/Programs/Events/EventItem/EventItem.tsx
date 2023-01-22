import { Program } from "@project-serum/anchor";
import React, { FC, useEffect, useState } from "react";
import { IEvent, IProgramData } from "../../../../interface/programs.interface";
import { parseEventData } from "../../../../utilities/helpers";
import "./EventItem.scss";
const EventItem: FC<{
  event: IEvent;
  program: Program;
  eventContent?: string;
  emitEvent: (eventMessage: string, name: string) => void;
}> = ({ event, program, emitEvent, eventContent }) => {
  useEffect(() => {
    program.addEventListener(event.name, (e, _slot) => {
      emitEvent(parseEventData(e), event.name);
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
        <textarea value={eventContent ?? ""} />{" "}
      </div>
    </div>
  );
};

export default EventItem;
