let standardImage = "standardImageLine.png";

var q = [
  {
    t: "Vilket påstående om körfält är riktig?",
    c: ["Vägrenen är ett körfält.", "Ett körfält behöver inte anges med vägmarkering.", "Ett körfält måste alltid anges med markering."],
    a: "1",
    img: standardImage,
    s: "Ett körfält behöver inte anges med vägmarkering.",
    sa: "Ett körfält behöver inte anges med vägmarkering, exempelvis grusväg."
  },
  {
    t: "Du har körkort med prövotid. Vad gäller?",
    c: ["Jag måste göra om både kunskaps- och körprovet om körkortet återkallas under prövotiden.", "Jag behöver enbart göra om körprovet om körkortet återkallas under periodtiden", "Körkortet återkallas i två månader om man bötfälls för felparkering."],
    a: "0",
    img: standardImage,
    s: "Jag måste göra om både kunskaps- och körprovet om körkortet återkallas under prövotiden.",
    sa: "Man måste göra om båda."
  },
  {
    t: "Vilken avgas saknar lukt och smak och påverkar hjärt och kärlsystem?",
    c: ["Kolmonoxid", "Koldioxid", "Kolväten", "Kväveoxid"],
    a: "0",
    img: standardImage,
    s: "Kolmonoxid",
    sa: "Försämrar blodets syreupptagningsförmåga."
  },
  {
    t: "Vilket ämne i avgaserna bidrar mest till att öka växthuseffekten?",
    c: ["Kolväten", "Kolmonoxid", "Koldioxid"],
    a: "2",
    img: standardImage,
    s: "Koldioxid",
    sa: "Den växthusgas som bidrar mest till växthuseffekten och klimatförändringen."
  },
  {
    t: "Vilket ämne i avgaserna bidrar till försurningen i våra skogar och sjöar?",
    c: ["Kolväten", "Kväveoxider", "Kolmonoxid", "Koldioxid"],
    a: "1",
    img: standardImage,
    s: "Kväveoxider",
    sa: "Bidrar till försurning av marken och övergödning av sjöar."
  },
  {
    t: "Vilket alternativ beskriver bäst mogna personers egenskaper som förare?",
    c: ["De kan tillämpa gällande regler i varje trafiksituation.", "De har förståelse för andra trafikanters misstag och svårigheter.", "De kan förkorta bromssträckan när de kör i högre hastighet.", "De kan snabbt ta sig ur riskfyllda situationer genom att köra impulsivt."],
    a: "1",
    img: standardImage,
    s: "De har förståelse för andra trafikanters misstag och svårigheter.",
    sa: "De har förståelse för andra trafikanters misstag och svårigheter."
  },
  {
    t: "Vad måste du först vara beredd på i den här situationen?",
    c: ["Fordon som kommer ut från höger efter övergångsstället.", "Gående som går ut framför bussen.", "Gående som går ut på övergångsstället.", "Fordon som kommer ut från vänster efter ävergångsstället."],
    a: "1",
    img: "t1-17.png",
    s: "Gående som går ut framför bussen. Högst risk.",
    sa: "Gående som går ut framför bussen. Högst risk."
  }
];

var l = q.length;
var lvl = 0;
var score = 0;
var skip = l / 2;
var qdiv = $("#quiz");
var qstats = $("#status");
qstats.hide();

function answerchecking(ra, ca) {
  this.ra = ra;
  this.ca = ca;
  return ra === ca;
}

function newgame() {
  var d = bootbox.dialog({
    message: '<p class="text-center">Please wait...</p>',
    closeButton: false
  });

  setTimeout(function() {
    d.modal("hide");
    qstats.html("");
    getquiz();
  }, 800);
}

function getquiz() {
  viewcomment(lvl);
  if (lvl >= l) {
    $(document)
      .find(qdiv)
      .html(
        "<h2>Provet är klart</h2><p>Du fick <strong>" +
          score +
          "</strong> av <strong>" +
          l +
          "</strong> frågor rätt.</p><hr /> <div class='btn-group'> <a class='btn btn-success' href='#' id='review_answer'>Se dina svar</a> <a class='btn btn-primary' onclick='newgame()' href='#'>Prova igen</a></div>"
      );
    lvl = 0;
    score = 0;
  } else {
    $(document)
      .find(qdiv)
      .html(
        "<p>Fråga <strong>" +
          (lvl + 1) +
          "</strong> av <strong>" +
          l +
          "</strong></p><br><h4>" +
          q[lvl].t +
          "?</h4><hr />" +
          '<img src="' + q[lvl].img + '" width="800px;">'
      );
    $.each(q[lvl].c, function(i, k) {
      $(document)
        .find(qdiv)
        .append(
          '<div class="radio"> <label> <input type="radio" value="' +
            i +
            '" name="choices"> ' +
            q[lvl].c[i] +
            " </label> </div>"
        );
    });

    $(document)
      .find(qdiv)
      .append(
        '<hr /><div class="btn-group"><a onclick="nextquestion()" href="#" class="btn btn-primary">Next question</a> <a class="btn btn-warning" href="#" onclick="skipquiz()"><i class="glyphicon glyphicon-forward"></i></a></div>'
      );
  }
}
function statuslog(typ, s) {
  this.typ = typ;
  this.s = s;
  return '<p class="' + typ + '">' + s + "</p>";
}

function skipquiz() {
  qstats.append(statuslog("text-danger", q[lvl].t));
  lvl++;
  getquiz();
}

function nextquestion() {
  var r = $("input[name=choices]:checked").val();
  var rr = q[lvl].a;
  //No selection
  if ($("input[name=choices]").is(":checked")) {
    if (answerchecking(r, rr)) {
      score++;
      qstats.append(statuslog("text-success", "<b>RÄTT- </b>" + q[lvl].t + "<br>" + "<b>Svar- </b>" + q[lvl].sa + "<br>" + "<b>Kommentar- </b>" + "<i>" + q[lvl].s + "</i>"));
    } else {
      qstats.append(statuslog("text-danger", "<b>FEL- </b>" + q[lvl].t + "<br>" + "<b>SVAR- </b>" + q[lvl].sa + "<br>" + "<b>Kommentar- </b>" + "<i>" + q[lvl].s + "</i>"));
    }
    lvl++;
    getquiz();
  }
}

$(document).on("click", "#review_answer", function() {
  //$('#status').show();
  bootbox.alert({
    title: "Dina svar",
    message: qstats.html(),
    size: "large",
    callback: function() {}
  });
});

function viewcomment(level) {
  if (level > 5) {
    $("#comment-form").show();
  }
}

$("#quiz").addClass("animated bounce");
//getquiz();

//Comment Box
$("#submitcomment").on("click", function() {
  var cc = $("#write").val();
  var va = $("#validanswer").val();
  var ccontent = '<div class="lead"><b>Anonymous:</b> ' + cc + "</div>";
  if (cc !== "") {
    if (va == 2) {
      $("#comment").prepend(ccontent);
      $("#write").val("");
      $("#validanswer").val("");
    } else {
      bootbox.alert({ message: "Invalid answer!", size: "small" });
    }
  }
});
