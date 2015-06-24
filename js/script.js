$(document).on('pageinit', '#index', function(){ 
    var date = new Date();
     var y = date.getFullYear();
     
    $("#calendar").jqmCalendar({
        events: [{
            "ringkasan": "1. Hari Purnama Sasih Sadha, dan Hari Soma Umanis Tulu, memuja Bhatara/Bhatari di Merajan  ",
            "begin": new Date(y,5, 1 ),
            "end": new Date(y, 5, 2)

        },{
            "ringkasan": "2. Hari Raya Waisaka Puja( Budha ) 2559 ",
            "begin": new Date(y,5, 2 ),
            "end": new Date(y, 5, 3)

        },{
            "ringkasan": "16. Hari Tilem Sasih Sadha ( Puncak Pk : 21.05.02 WIB ) ",
            "begin": new Date(y,5, 16 ),
            "end": new Date(y, 5, 17)

        }, {
            "ringkasan": "1. Hari Purnama Sasih Kasa",
            "begin": new Date(y,6, 1 ),
            "end": new Date(y, 6, 2)

        }, {
            "ringkasan": "14. Hari Penampahan Galungan",
            "begin": new Date(y, 6, 14),
            "end": new Date(y, 6, 15)
            
        }, {
            "ringkasan": "15. Hari Raya Galungan",
            "begin": new Date(y, 6, 15),
            "end": new Date(y, 6, 16),
            
        }, {
            "ringkasan": "16. Hari Umanis Galungan dan Hari Tilem Sasih Kasa ( Puncak Pk : 08.24.02 WIB )",
            "begin": new Date(y, 6, 16),
            "end": new Date(y, 6, 17),
            
        }, {
            "ringkasan": "25. Hari Raya Kuningan dan Hari Kajeng Kliwon Enyitan",
            "begin": new Date(y, 6, 25),
            "end": new Date(y, 6, 26),
            
        },{
            "ringkasan": "30. Hari Purnama Sasih Karo",
            "begin": new Date(y, 6, 30),
            "end": new Date(y, 6, 31),
            
        },{
            "ringkasan": "14. Hari Tilem Sasih Karo ( Puncak Pk : 21.53.05 WIB )",
            "begin": new Date(y, 7, 14),
            "end": new Date(y, 7, 15),
            
        },{
            "ringkasan": "17. Hari Proklamasi Kemerdekaan RI ke 70",
            "begin": new Date(y, 7, 17),
            "end": new Date(y, 7, 18),
            
        },{
            "ringkasan": "29. Hari Purnama Sasih Katiga dan Tumpek Krulut",
            "begin": new Date(y, 7, 29),
            "end": new Date(y, 7, 30),
            
        },{
            "ringkasan": "13. Hari Tilem Sasih Katiga ( Puncak Pk : 13.40.56 WIB )",
            "begin": new Date(y, 8, 13),
            "end": new Date(y, 8, 14),
            
        },{
            "ringkasan": "28. Hari Purnama Sasih Kapat ( Puncak Pk : 09.50.11 WIB )",
            "begin": new Date(y, 8, 28),
            "end": new Date(y, 8, 29),
            
        },{
            "ringkasan": "12. Hari Tilem Sasih Kapat",
            "begin": new Date(y, 9, 12),
            "end": new Date(y, 9, 13),
            
        },{
            "ringkasan": "14. Tahun Baru Islam 1437 Hijriyah",
            "begin": new Date(y, 9, 14),
            "end": new Date(y, 9, 15),
            
        },{
            "ringkasan": "27. Hari Purnama Sasih Kelima ( Puncak Pk : 19.04.47 WIB )",
            "begin": new Date(y, 9, 27),
            "end": new Date(y, 9, 28),
            
        },{
            "ringkasan": "11. Hari Tilem Sasih Kelima dan Buda Cemeng Klawu",
            "begin": new Date(y, 10, 11),
            "end": new Date(y, 10, 12),
            
        },{
            "ringkasan": "26. Hari Purnama Sasih Kenam ( Puncak Pk : 05.43.54 WIB ) dan Hari Petetegan",
            "begin": new Date(y, 10, 26),
            "end": new Date(y, 10, 27),
            
        },{
            "ringkasan": "28. Hari Saraswati, melakukan persembahyangan, perayaan turunnya Weda/Ilmu Pengetahuan",
            "begin": new Date(y, 10, 28),
            "end": new Date(y, 10, 29),
            
        },{
            "ringkasan": "2. Hari Pegerwesi",
            "begin": new Date(y, 11, 2),
            "end": new Date(y, 11, 3),
            
        },{
            "ringkasan": "10. Hari Tilem Sasih Kenam ( Melakukan Upakara 'Nangluk Merana'",
            "begin": new Date(y, 11, 10),
            "end": new Date(y, 11, 11),
            
        },{
            "ringkasan": "25. Hari Raya Natal dan Hari Purnama Sasih Kapitu ( Puncak Pk : 18.11.08 WIB ) ",
            "begin": new Date(y, 11, 25),
            "end": new Date(y, 11, 26),
                     
        },


        ],
        months: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
        days: ["Mi", "Se", "Sel", "Ra", "Ka", "Ju", "Sa"],
        startOfWeek: 0
        
    });

    $("#calendar").bind('change', function(event, date) {
        var events = $("#calendar").data("jqm-calendar").settings.events;
        for ( var i = 0; i < events.length; i++ ) {
            if ( events[i].begin.getFullYear() == date.getFullYear() && events[i].begin.getMonth() == date.getMonth() && events[i].begin.getDate() == date.getDate()){
                 // alert(events[i].ringkasan)
                 if (events[i].ringkasan!=""){
                     $.mobile.changePage("#dialog", { role: "dialog" } );
                    $("#isiPeristiwa").html(events[i].ringkasan);
                 }
                 else{
                    
                 }
                 return false;
            }
        }
    });
});