 function test() {}

// Goal: From a Google Form submission, create a Calendar event with a matching Document, attached to the event
// https://developers.google.com/apps-script/advanced/calendar
// https://developers.google.com/apps-script/guides/services/advanced#enabling_advanced_services
// https://developers.google.com/google-apps/calendar/v3/reference/events
 
// Creates an event for the moon landing and logs the ID.


// Google Documentation

 var event = CalendarApp.getDefaultCalendar().createEvent('Apollo 11 Landing',
     new Date('July 20, 1969 20:00:00 UTC'),
     new Date('July 20, 1969 21:00:00 UTC'),
     {location: 'The Moon'});

 // Logger.log('Event ID: ' + event.getId());

// Stack Overflow
 
function createNewEvent() {
  var calendarId = ''; //Calendar Id String
  var fileId = ''; // File Id String
  var start = new Date('January 20, 2016 20:00:00 UTC');
  var end = new Date('January 20, 2016 21:00:00 UTC');
  var eventObj = {
    summary: 'Apollo 11 Landing',
    location: 'The Moon',
    description: 'Sample description',
    start: {dateTime: start.toISOString()},
    end: {dateTime: end.toISOString()},
    attachments: [{
        'fileUrl': 'https://drive.google.com/open?id=' + fileId,
        'title': 'Moon Docs'
    }]
  };
  var resp = Calendar.Events.insert(eventObj, calendarId, {'supportsAttachments': true});
  Logger.log(resp); // Check out the response in the logs!
}

// var d = new Date(99,5,24,11,33,30,0);
// Thu Jun 24 1999 11:33:30 GMT-0500 (CDT)

// setTimeZone(timeZone)
// getCalendarById(id)
// getCalendarsByName(name)

function getCalendarByName(name) {
  return CalendarApp.getCalendarByName(name)[0];
} 

var cal = CalendarApp.getCalendarsByName("Development")[0];
var obj = {
  Date:  "2/6/2018",
  Start: "8:30:00 PM",
  End:   "10:30:00 PM"
};

// no need to reinvent the wheel with dates in js

function dateObjectFromDateAndTime(date, time) {
  var startObj = new Date (obj.Start + "," + obj.Date);
  return new Date (date + "," + time);
} 

Logger.log("testing");
testing(obj);

function createNewEvent() {
  var calendarId = ''; //Calendar Id String
  var fileId = ''; // File Id String
  var start = new Date('January 20, 2016 20:00:00 UTC');
  var end = new Date('January 20, 2016 21:00:00 UTC');
  var eventObj = {
    summary: 'Apollo 11 Landing',
    location: 'The Moon',
    description: 'Sample description',
    start: {dateTime: start.toISOString()},
    end: {dateTime: end.toISOString()},
    attachments: [{
        'fileUrl': 'https://drive.google.com/open?id=' + fileId,
        'title': 'Moon Docs'
    }]
  };
  var resp = Calendar.Events.insert(eventObj, calendarId, {'supportsAttachments': true});
  Logger.log(resp); // Check out the response in the logs!
}

function documentMergeObject(naming, template, fldr, obj, opt) {
  var name = findReplaceInString(naming, obj);
  name     = appendDateTime(name, opt);
  var file = copyFileToFolder(template, fldr).setName(name);
  var doc  = openFileAsType(file, "document");
  findReplaceInDoc(doc, obj);
  return file;
} 

function singleDayCalendarEventWithAttachment(cal, date, start, end, file, rsp) {
  var id    = cal.getId();
  start     = dateObjectFromDateAndTime(date, start);
  end       = dateObjectFromDateAndTime(date, end);
  var event = {
    summary : rsp.Summary,
    location : rsp.Location,
    description : rsp.Description,
    attachments: [{
      "fileUrl" : file.getUrl(),
      "title" : file.getName()
    }]

  };
  var create = Calendar.Events.insert(event, id, {"supportsAttachments" : true});
}

// lastFormResponseAsObject (form, prop)
// lastFormResponseAsObjectExpanded (form)
// formResponsesAsArrayOfObjects (form)
// formResponsesAsArrayOfObjectsExpanded (form, prop)

function lastFormResponseAsObject(form) {
  var result        = [];
  var template      = {};
  var formResponses = form.getResponses();
  var lastResponse  = formResponses[formResponses.length - 1];
  var itemResponses = lastResponse.getItemResponses();
  for (var i = 0; i < itemResponses.length; i++) {
    var itemTitle    = itemResponses[i].getItem().getTitle();
    var itemResponse = itemResponses[i].getResponse();
    if (itemTitle !== prop) {
      template[itemTitle] = itemResponse;
    }
    template["Email Address"] = lastResponse.getRespondentEmail();
    template.Timestamp        = lastResponse.getTimestamp();
  } 
  var expand = itemResponses[x].getResponse();
  for (var j = 0; j < expand.length; j++) {
    var expanded = JSON.parse(JSON.stringify(template));
    expanded[prop] = expand[j];
    result.push(expanded);
  } 
  return result;
} 


// Staging

var form        = thisThing();
var cal         = CalendarApp.getCalendarsByName("Development")[0];
var rsp         = getLastRsp();
var template    = verifyFileAtPath("path/to/template/document");
var destination = verifyFolderAtPath("path/to/response/folder");

function getCalendarByName(name) {
  return CalendarApp.getCalendarByName(name)[0];
} 

// pull from other project

function getLastRsp() {
} 

function onResponseCreateEventWithAttachment() {
  
} 