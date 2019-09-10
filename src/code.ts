import { Subject } from "rxjs";

let subject = new Subject();

subject.subscribe(
  data => addItem("Observer 1: " + data),
  err => addItem(err),
  () => addItem("Observer 1 completed")
);

subject.next("The 1-st thing was emited first");

let observer2 = subject.subscribe(data => addItem('Obserwer 2" ' + data));

subject.next("The 2-nd thing");
subject.next("The 3-rd thing");

observer2.unsubscribe();
subject.next("The 4-rd thing");

function addItem(val: any) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}
