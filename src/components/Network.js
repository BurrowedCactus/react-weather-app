import React, { useEffect } from "react";
import { of ,from } from "rxjs";
import { fromFetch } from "rxjs/fetch";
import { switchMap, catchError } from "rxjs/operators";

function Network(props) {
  const data$ =
  
  //fromFetch("https://jsonplaceholder.typicode.com/todos/1");
  from([1,2,3,4,5]);
/*
  .pipe(
    console.log("something is happening"),
    switchMap((response) => {
        console.log("something is happening");
      if (response.ok) {
        // OK return data
        return response.json();
      } else {
        // Server is returning a status requiring the client to try something else.
        return of({ error: true, message: `Error ${response.status}` });
      }
    }),
    catchError((err) => {
      // Network or other error, handle appropriately
      console.error(err);
      return of({ error: true, message: err.message });
    })
  );
  */
  useEffect(() => {
    const subscription = data$.subscribe({
        next: result => console.log(result),
        complete: () => console.log('done')
       });
    return subscription.unsubscribe();
  });
  return <div>  </div>;
}

export default Network;
