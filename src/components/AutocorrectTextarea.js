import React, { useState, useEffect } from 'react'

function AutocorrectTextarea() {
   const corrections = {
      helo: "hello",
      wrld: "world",
      realy: 'really',
      wierd: 'weird'
   };

   const [data, setData] = useState("");

   useEffect(() => {
      if (data[data.length - 1] === " ") {
         let words = data.split(" ");
         words.pop();
         let word = words[words.length - 1];
         if (word in corrections) {
            let correctedData = data.replace(word, corrections[word]);
            setData(correctedData);
         }
         else {
            console.log('no replacement found')
         }
      }
   }, [data]);

   const handleData = (e) => {
      setData(e.target.value);
   }

   return (
      <>
         <label for='textarea'>Start typing below...</label> <br />
         <textarea
            data-testid="textarea"
            rows={5}
            cols={50}
            onChange={handleData}
            value={data}></textarea>
      </>
   )
}

export default AutocorrectTextarea
