import * as Rx from 'rxjs';

// Replay Subject

const replaySubject = new Rx.ReplaySubject();

replaySubject.subscribe((value) => {
  console.log('With Replay Subject Subscriber 1 Value ' + value);
});

replaySubject.next(Math.random());
replaySubject.next(Math.random());

replaySubject.subscribe((data) => {
  console.log('With Replay Subject Subscriber 2 Value ' + data);
});

replaySubject.next(Math.random());

// Behaviour Subject

const behaviourSubject = new Rx.BehaviorSubject(2);

behaviourSubject.subscribe((value) => {
  console.log('With Behaviour Subject Subscriber 1 Value ' + value);
});

behaviourSubject.next(Math.random());
behaviourSubject.next(Math.random());
behaviourSubject.next(Math.random());

behaviourSubject.subscribe((data) => {
  console.log('With Behaviour Subject Subscriber 2 Value ' + data);
});

behaviourSubject.next(Math.random());

// Subject

const subject = new Rx.Subject();

subject.subscribe((value) => {
  console.log('With Subject Subscriber 1 Value ' + value);
});

subject.next(Math.random());
subject.next(Math.random());

subject.subscribe((data) => {
  console.log('With Subject Subscriber 2 Value ' + data);
});

subject.next(Math.random());
