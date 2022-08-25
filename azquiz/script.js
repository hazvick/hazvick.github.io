let standardImage = "standardImage.png";

var q = [
  {
    t: "A company is currently looking at using Azure storage accounts as a data storage platform. They want to be able to store documents that would need to be retained for around a year. They want to minimize the cost of storage. These documents are not accessed that frequently.\
    \n<br><b>If you need to retrieve an object in Azure BLOB Archive storage, which of the following would need to be done first</b>",
    c: ["Change the access permissions", "Change the tier of the object", "Change the account kind", "Change the access keys"],
    a: "1",
    img: standardImage,
    s: "You need to change the tier of the object. https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-storage-tiers",
    sa: "Change the tier of the object"
  },
  {
    t: "A company is developing a system which is going to be using Azure Cosmos DB at the underlying data store. Below are the requirements of the data store\
    \nEnsure at least 99.99% availability and provide network failures\
    \nAccepts writes via the application even in the case of network outages or any unforeseen failures\
    \nProcess data in the same sequence as the writes being made\
    \nAllow out of order data with a maximum of 5 second tolerance window\
    \nYou have to provision a Cosmos DB account – SQL API. You already have a resource group in the South Central US region.\
    \nYou have to complete the below Azure CLI commands for this purpose.\
    \n<br><b>Which of the following would go into Slot1</b>",
    c: ["Strong", "Eventual", "ConsistentPrefix", "BoundedStaleness"],
    a: "3",
    img: "https://skillcertpro.com/wp-content/uploads/2020/08/i/word-image-679.png",
    s: "Since you can have an out of order read for a maximum of 5 seconds, this becomes our staleness window. https://docs.microsoft.com/en-us/azure/cosmos-db/consistency-levels",
    sa: "BoundedStaleness"
  },
  {
    t: "A company is developing a series of applications. Each of these applications would be interacting with separate Azure CosmosDB accounts. Each application has a different requirement when it comes to accessing the underlying data. You have to set the consistency level for the Azure CosmosDB accounts based on each application requirement. You have to choose the most cost-effective consistency level for each CosmosDB account. Below are the requirements for each application when it comes to the consistency of the underlying data\
    \nApplication Name Data requirement\
    \nskillcertlabappA This is not a critical application hence here no ordering of reads is required.\
    \nskillcertlabappB Here the application uses must never see out-of-order writes\
    \nskillcertlabappC Here the users must always see the latest committed write.\
    \nskillcertlabappD Here the data can be stale by at most 2 versions\
    \n<br><b>Which of the following would you choose as the consistency level for the CosmosDB account used by the application “skillcertlabappA”</b>",
    c: ["Strong", "Session", "Consistent prefix", "Eventual"],
    a: "3",
    img: standardImage,
    s: "Since the requirement is that the users don’t mind seeing out of order reads, one can use the Eventual consistency level as the most cost-effective consistency level for the CosmosDB account. https://docs.microsoft.com/en-us/azure/cosmos-db/consistency-levels",
    sa: "Eventual"
  },
  {
    t: "A team has created an Index in the Azure Search service. You have to upload data into the Index. You propose the following steps to carry out from your .Net program\
    \nCreate a SearchlndexClient object to connect to the search index\
    \nCreate an IndexBatch that contains the documents which must be added.\
    \nCall the Documents.Index method of the SearchlndexClient and pass the IndexBatch.\
    <br><b>Does the list of steps fulfil the requirement</b>",
    c: ["Yes", "No"],
    a: "0",
    img: standardImage,
    s: "Yes, this is the correct list of steps as shown below from the Microsoft documentation. https://docs.microsoft.com/en-us/azure/search/search-import-data-dotnet",
    sa: "Yes"
  },
  {
    t: "A development team is developing an application. The application will be storing its data in Azure Table storage. Below are the fields that are going to be stored in the table\
    Region\
    Email address\
    Phone number\
    The following snippet of code needs to be completed that would be used to insert a batch of records.\
    \n<br><b>Which of the following will go into Slot1</b>",
    c: ["TableOperation", "TableBatchOperation", "TableEntity", "TableQuery"],
    a: "1",
    img: "https://skillcertpro.com/wp-content/uploads/2020/08/i/word-image-705.png",
    s: "Since this is a batch operation, we have to use the TableBatchOperation Type. An example is also given in the Microsoft documentation. https://docs.microsoft.com/en-us/azure/cosmos-db/table-storage-how-to-use-dotnet",
    sa: "TableBatchOperation"
  },
  {
    t: "A development team is developing an application. The application will be working with customer data. The application will also be making use of Azure Redis Cache. You need to invalidate the cache when the customer data is changed.\
    You have to complete the below code to comply with the requirement\
    \n<br><b>Which of the following will go into Slot2</b>",
    c: ["cache.KeyDelete(p_Customer);", "cache.ValueDelete(p_Customer);", "cache.StringGet(p_Customer);", "cache.StringSet(p_Customer);"],
    a: "0",
    img: "https://skillcertpro.com/wp-content/uploads/2020/08/i/word-image-709.png",
    s: "Since you have to invalidate the cache, you have to delete the Key itself\
    Option B is incorrect since you need to work with keys and not the values\
    Option C and D is incorrect this is used to get the string value. https://docs.microsoft.com/en-us/azure/azure-cache-for-redis/cache-dotnet-how-to-use-azure-redis-cache",
    sa: "cache.KeyDelete(p_Customer);"
  },
  {
    t: "A developer has created a table in an Azure storage account called “Customers”. The data in the table is partitioned by the column firstname. The developer needs to write a query that would return all the customers with the first name of “Dave”. <br><b>Which of the following is the right code segment for the Where clause</b>",
    c: ["TableQuery.GenerateFilterCondition('PartitionKey', QueryComparisons.Equal, 'Dave')", "TableQuery.GenerateFilterCondition('PartitionKey', Equals, 'Dave')", "TableQuery.GenerateFilterCondition('firstname', QueryComparisons.Equal, 'Dave')", "TableQuery.GenerateFilterCondition('firstname', Equal, 'Dave')"],
    a: "0",
    img: standardImage,
    s: "An example of this is given in the Microsoft documentation as shown below. Here you need to search via the partition key and use the QueryComparisions clause. https://docs.microsoft.com/en-us/azure/cosmos-db/table-storage-how-to-use-dotnet",
    sa: "TableQuery.GenerateFilterCondition('PartitionKey', QueryComparisons.Equal, 'Dave')"
  },
  {
    t: "A team is developing a software that will generate large data sets. These large data sets will be processed by nodes in the Azure Batch Service. In the program , you have to create the compute nodes for Azure Batch. <br><b>Which of the following would you do?</b>",
    c: ["In the program, implement a class for TaskAddParameter", "In the program, implement a class for JobAddParameter", "In the program, call the method - BatchClient.PoolOperations.CreatePool", "In the program, call the method - BatchClient.VMOperations.CreateVM"],
    a: "2",
    img: standardImage,
    s: "The Microsoft documentation clearly gives the command for creating a pool of Virtual Machines as shown below. The Batch client class and the CreatePool method are used to create a pool of instances. https://docs.microsoft.com/en-us/azure/batch/quick-run-dotnet",
    sa: "In the program, call the method - BatchClient.PoolOperations.CreatePool"
  },
  {
    t: "A team needs to manage several Logic Apps. There is a need to change definitions, add new logic and optimize the applications on a regular basis. You need to ensure that you use the right tools for the right purpose.\
    \n<br><b>Which of the following would you use to edit B2B workflows</b>",
    c: ["Logic Apps Designer", "Code View Editor", "Enterprise Integration Pack", "API Connections"],
    a: "2",
    img: standardImage,
    s: "https://docs.microsoft.com/en-us/azure/logic-apps/logic-apps-enterprise-integration-b2b",
    sa: "Enterprise Integration Pack"
  },
  {
    t: "A company needs to develop a script that will do the following\
    \nCreate an Azure Web App\
    \nCreate the Web App service plan\
    \nEnsure automatic deployment of code from Github\
    \nThe following variables are in place\
    \nVariable Name Variable value\
    \n$gitrepo https://github.com/skillcertlabs/app\
    \n$webappname skillcertlabsapp\
    \nYou have to complete the following script\
    \n<br><b>Which of the following would go into Slot1</b>",
    c: ["az webapp create", "az appservice plan create", "az webapp deployment", "az group assign"],
    a: "1",
    img: "https://skillcertpro.com/wp-content/uploads/2020/08/i/word-image-715.png",
    s: "https://docs.microsoft.com/en-us/azure/app-service/scripts/cli-deploy-github",
    sa: "az appservice plan create"
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
        "<h2>All done!</h2><p>You got <strong>" +
          score +
          "</strong> of " +
          l +
          " questions.</p><hr /> <div class='btn-group'> <a class='btn btn-success' href='#' id='review_answer'>Review</a> <a class='btn btn-primary' onclick='newgame()' href='#'>Try again</a></div>"
      );
    lvl = 0;
    score = 0;
  } else {
    $(document)
      .find(qdiv)
      .html(
        "<p>Quiz number <strong>" +
          (lvl + 1) +
          "</strong> of <strong>" +
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
      qstats.append(statuslog("text-success", "<b>CORRECT: </b>" + q[lvl].t + "<br>" + "<b>Answer: </b>" + q[lvl].sa + "<br>" + "<b>Solution: </b>" + "<i>" + q[lvl].s + "</i>"));
    } else {
      qstats.append(statuslog("text-danger", "<b>WRONG: </b>" + q[lvl].t + "<br>" + "<b>Answer: </b>" + q[lvl].sa + "<br>" + "<b>Solution: </b>" + "<i>" + q[lvl].s + "</i>"));
    }
    lvl++;
    getquiz();
  }
}

$(document).on("click", "#review_answer", function() {
  //$('#status').show();
  bootbox.alert({
    title: "Review",
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
