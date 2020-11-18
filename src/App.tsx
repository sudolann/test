import React, { useMemo, useState } from 'react';
import './App.scss';
import questions from './data/';
import { Radio, Button, Checkbox } from 'antd';
import { DoubleRightOutlined } from '@ant-design/icons';
import { CopyBlock, tomorrow} from "react-code-blocks";

function getRandomIntInclusive(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
  const [selectedAnswer, setSelectedAnswer] = useState<any>(undefined);
  const [selectedAnswers, setselectedAnswers] = useState<object>({});

  let [index, setIndex] = useState<number>(0);
  
  const questionType: string | undefined = questions[index].type;
  // const type = questionType && (questionType.charAt(0).toUpperCase() + questionType.slice(1))

  const handleSetAnswer = (e: any): void => {
    setSelectedAnswer(e.target.value);
  };

  const handleSetNext=()=> {
    setselectedAnswers({[index]: setSelectedAnswer})

    const filteredQuestion = questions.splice(index, 1);

    // const newIndex = getRandomIntInclusive(0, (filteredQuestion.length -1));
    // console.log(newIndex, "ind", filteredQuestion)
    // console.log(questions.map(questions, (item: any)=> {
    //   return arr1[item];
    // }));

    // const arr1 = [33,66,77,8,99]
    // const arr2 = [2,0,3] 
    // // console.log(index !==)
    // // console.log(arr2.map((item) => arr1[item] ));
    // console.log(arr1.filter((el, index)=>arr1.includes(el)), "ind")
    // const randomIndex = getRandomIntInclusive(0, (questions.length -1));
    // console.log=(questions.length -1)
    var d:any = {};
    [ 'zebra', 'horse' ].forEach(function(k) {
      d[k] = undefined;
    });

    console.log(d, "var d = {};")
    setIndex(index++);


  };

  const data=useMemo(()=> {
    const allAnswers = [...questions[index].badAnswers, ...questions[index].goodAnswers];
    const question =questions[index].question;
    return {
      allAnswers,
      question
    }
  }, [questions, index])
 


  return (
   <div className="app">
      <div className="question">
        <p className="question__item">{data.question}</p>
        <CopyBlock
          text={questions[index].code}
          language="javascript"
          theme={tomorrow}
          showLineNumbers={false}
          wrapLines
          codeBlock
        />
        {questionType === 'radio' && (
          <Radio.Group onChange={handleSetAnswer} value={selectedAnswer}>
            {data.allAnswers.map((answer, i)=> <Radio value={answer} key={i} className="question__answer" >{answer}</Radio>)}
          </Radio.Group>
        )}
        {questionType === 'checkbox' && (
          <Checkbox.Group>
            {data.allAnswers.map((answer, i)=> <Checkbox value={answer} key={i} >{answer}</Checkbox>)}
          </Checkbox.Group>
        )}
        <Button type="primary" size="middle" onClick={():void=>handleSetNext()}>
            Next Question <DoubleRightOutlined />
        </Button>
      </div>
   </div>
  );
}

export default App;
