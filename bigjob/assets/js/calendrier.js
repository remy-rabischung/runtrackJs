document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        selectable: true,
        select: function(info) {
            if (info.start < new Date()) {
                alert("Vous ne pouvez pas ajouter d'événements dans le passé.");
                calendar.unselect();
                return;
            }
            if ([0, 6].includes(info.start.getDay())) {
                alert("Vous ne pouvez pas ajouter d'événements le week-end.");
                calendar.unselect();
                return;
            }
            $('#addEventModal').modal('show');
            $('#eventStart').val(info.startStr);
            $('#eventEnd').val(info.endStr);
        },
        events: []
    });

    calendar.render();

    $('#eventForm').submit(function(event) {
        event.preventDefault();
        var title = $('#eventTitle').val();
        var start = $('#eventStart').val();
        var end = $('#eventEnd').val();
        calendar.addEvent({ title: title, start: start, end: end });
        $('#addEventModal').modal('hide');
    });
});
