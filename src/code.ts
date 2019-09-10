import { Observable } from "rxjs";

let observable = Observable.create((observer: any) => {
  try {
    observer.next("How are you");
    setInterval(() => {
      observer.next("I am good");
    }, 200);
  } catch (err) {
    observer.error(err);
  }
});

let observer = observable.subscribe(
  (x: any) => addItem(x),
  (error: any) => addItem(error),
  () => addItem("Completed")
);

let observer2 = observable.subscribe((x: any) => addItem(x));

observer.add(observer2);

setTimeout(() => observer.unsubscribe(), 601);

function addItem(val: any) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}
