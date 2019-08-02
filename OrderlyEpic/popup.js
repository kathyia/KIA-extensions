document.addEventListener("DOMContentLoaded", founction () {

  const button = document.getElementById("orderEpicRank");
  const output = document.getElementById("output");

  output.textConent = "Loading...";

  addEventListener("click", function () {
    getCurrentIssueStatus()
    {
    var statusname;
    var issueKey = JIRA.Issue.getIssueKey();
     AJS.$.ajax({
     url: "/rest/api/2/issue/" + issueKey,
     type: 'get',
     dataType: 'json',
     async: false,
     success: function(data) {
     statusname = data.fields.status.name;
     }
     });
     return statusname;
    }
)
