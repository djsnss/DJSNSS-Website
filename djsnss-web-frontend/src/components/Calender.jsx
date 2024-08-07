import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button'; // Replaces FlatButton
import TextField from '@mui/material/TextField';
import TimePicker from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.momentLocalizer(moment);

class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      title: '',
      start: '',
      end: '',
      desc: '',
      openSlot: false,
      openEvent: false,
      clickedEvent: {}
    };
    this.handleClose = this.handleClose.bind(this);
  }

  // componentDidMount(){
  //     this.getCachedEvents();
  // }

  // getCachedEvents(){
  //   const cachedEvents = localStorage.getItem("cachedEvents");
  //   console.log("Cached Events", JSON.parse(cachedEvents));
  //   if(cachedEvents){
  //       this.setState({events: JSON.parse(cachedEvents)})
  //   }
  //   return;
  // }

  // Closes modals
  handleClose() {
    this.setState({ openEvent: false, openSlot: false });
  }

  // Allows user to click on calendar slot and handles if appointment exists
  handleSlotSelected(slotInfo) {
    console.log("Real slotInfo", slotInfo);
    this.setState({
      title: '',
      desc: '',
      start: slotInfo.start,
      end: slotInfo.end,
      openSlot: true
    });
  }

  handleEventSelected(event) {
    console.log("event", event);
    this.setState({
      openEvent: true,
      clickedEvent: event,
      start: event.start,
      end: event.end,
      title: event.title,
      desc: event.desc
    });
  }

  setTitle(e) {
    this.setState({ title: e });
  }

  setDescription(e) {
    this.setState({ desc: e });
  }

  handleStartTime = (date) => {
    this.setState({ start: date });
  };

  handleEndTime = (date) => {
    this.setState({ end: date });
  };

  // Onclick callback function that pushes new appointment into events array.
  setNewAppointment() {
    const { start, end, title, desc } = this.state;
    let appointment = { title, start, end, desc };
    let events = this.state.events.slice();
    events.push(appointment);
    // localStorage.setItem("cachedEvents", JSON.stringify(events));
    this.setState({ events });
  }

  // Updates Existing Appointments Title and/or Description
  updateEvent() {
    const { title, desc, start, end, events, clickedEvent } = this.state;
    const index = events.findIndex(event => event === clickedEvent);
    const updatedEvent = events.slice();
    updatedEvent[index].title = title;
    updatedEvent[index].desc = desc;
    updatedEvent[index].start = start;
    updatedEvent[index].end = end;
    // localStorage.setItem("cachedEvents", JSON.stringify(updatedEvent));
    this.setState({
      events: updatedEvent
    });
  }

  // Filters out specific event that is to be deleted and sets that variable to state
  deleteEvent() {
    let updatedEvents = this.state.events.filter(
      event => event["start"] !== this.state.start
    );
    // localStorage.setItem("cachedEvents", JSON.stringify(updatedEvents));
    this.setState({ events: updatedEvents });
  }

  render() {
    console.log("render()");
    const eventActions = [
      <Button
        key="cancel"
        onClick={this.handleClose}
      >
        Cancel
      </Button>,
      <Button
        key="delete"
        onClick={() => {
          this.deleteEvent();
          this.handleClose();
        }}
      >
        Delete
      </Button>,
      <Button
        key="confirm"
        onClick={() => {
          this.updateEvent();
          this.handleClose();
        }}
      >
        Confirm Edit
      </Button>
    ];
    const appointmentActions = [
      <Button
        key="cancel"
        onClick={this.handleClose}
      >
        Cancel
      </Button>,
      <Button
        key="submit"
        onClick={() => {
          this.setNewAppointment();
          this.handleClose();
        }}
      >
        Submit
      </Button>
    ];
    return (
      <div id="Calendar">
        {/* react-big-calendar library utilized to render calendar*/}
        <BigCalendar
          events={this.state.events}
          views={['month', 'week', 'day', 'agenda']}
          timeslots={2}
          defaultView="month"
          defaultDate={new Date()}
          selectable={true}
          onSelectEvent={event => this.handleEventSelected(event)}
          onSelectSlot={slotInfo => this.handleSlotSelected(slotInfo)}
        />

        {/* MUI Dialog for booking new appointment */}
        <Dialog
          title={`Book an appointment on ${moment(this.state.start).format(
            "MMMM Do YYYY"
          )}`}
          actions={appointmentActions}
          open={this.state.openSlot}
          onClose={this.handleClose}
        >
          <TextField
            label="Title"
            onChange={e => this.setTitle(e.target.value)}
            fullWidth
          />
          <br />
          <TextField
            label="Description"
            multiline
            onChange={e => this.setDescription(e.target.value)}
            fullWidth
          />
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <TimePicker
              label="Start Time"
              value={this.state.start}
              onChange={this.handleStartTime}
              renderInput={(params) => <TextField {...params} />}
            />
            <TimePicker
              label="End Time"
              value={this.state.end}
              onChange={this.handleEndTime}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Dialog>

        {/* MUI Dialog for Existing Event */}
        <Dialog
          title={`View/Edit Appointment of ${moment(this.state.start).format(
            "MMMM Do YYYY"
          )}`}
          actions={eventActions}
          open={this.state.openEvent}
          onClose={this.handleClose}
        >
          <TextField
            label="Title"
            defaultValue={this.state.title}
            onChange={e => this.setTitle(e.target.value)}
            fullWidth
          />
          <br />
          <TextField
            label="Description"
            multiline
            defaultValue={this.state.desc}
            onChange={e => this.setDescription(e.target.value)}
            fullWidth
          />
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <TimePicker
              label="Start Time"
              value={this.state.start}
              onChange={this.handleStartTime}
              renderInput={(params) => <TextField {...params} />}
            />
            <TimePicker
              label="End Time"
              value={this.state.end}
              onChange={this.handleEndTime}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Dialog>
      </div>
    );
  }
}

export default Calendar;
