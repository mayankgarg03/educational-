import { FastfoodOutlined } from "@mui/icons-material";

const sentencePlaceHolder={
    id:'',
    leftText:'',
    rightText:'',
    isDisable:true,
    trailCount:0,
    correctedWord:'',
    isCorrect:false,
    submit:{},
    shows:false,
    iconShow:false,
    selectedWord:'',
    distractor:[],
    replicate:false
}

const distractor=[];
export const SpellingUtils ={
    initialize:(mockData)=>{
        const sentence= mockData.map((mockData,index)=>{
            const {id,question,target,distractors}=mockData;
            const splittedSentence= question.split('<>');
            let word= [...distractors,target];

           let sentence={
                leftText:splittedSentence[0].trim(),
                rightText:splittedSentence[1].trim(),
                correctedWord:target,
                id,
                distractor:word,
                submit:{show:false,disabled:true}
    
            }

            return {...sentencePlaceHolder,...sentence};
        })
        return {sentence}
       

    }
}