window.addEventListener("load",init);
var ipc,
sss;
function init()
{
  ipc = require('ipc');
  update();
}
function update()
{
  curss();
  setTimeout(update,500);
}
function exec(command)
{
  return ipc.sendSync('synchronous-message',command);
}
function curss()
{
  sss = {};
  var s = exec("gphoto2 --get-config shutterspeed"),
  lines = s.split("\n");
  lines.forEach(function (line)
  {
    var c = line.substr(0,7);
    if(c == "Choice:")
    {
      var choice = line.substr(8,line.length).split(" ");
      sss[choice[0]] = choice[1];
    }
    if(c == "Current")
    {
      document.querySelector("#speed").innerHTML = line.substr(9,line.length);
    }
  });
}
