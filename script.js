const questions = [
    {
        question: "フィッシングメールの特徴は？",
        options: [
            "送信者が公式なメールアドレス",
            "リンク先が正規のウェブサイト",
            "不審なリンクや添付ファイルが含まれている",
            "個人情報を正当に求められる"
        ],
        correct: 2
    },
    {
        question: "不審なメールを受け取った場合、どうすべきか？",
        options: [
            "すぐに返信する",
            "リンクをクリックする",
            "送信者を確認し、怪しい場合は削除する",
            "パスワードを変更する"
        ],
        correct: 2
    },
    {
        question:"フィッシング詐欺の目的はなんですか？",
        options: [
            "あなたの個人情報を盗むこと",
            "広告をクリックさせること",
            "無料でサービスを提供すること",
            "コンピュータの性能を向上させること"
        ],
        correct: 0
    },
    {
        question:"フィッシング詐欺のリンク先URLを確認する際に重要なポイントはなんですか？",
        options:[
            "URLが「https;//」で始まっているかどうか",
            "ドメイン名に公式企業名が含まれているかどうか",
            "URLが長いかどうか",
            "ドメインが公式のものであるかを確認する"
        ],
        correct: 3
    },
    {
        question:"フィッシング詐欺を防ぐために有効な対策はどれですか？",
        options:[
            "不審なメールが来たらすぐにリンクをクリックする",
            "個人情報の提供を求められたら即座に提供する",
            "セキュリティソフトを使用し、怪しいリンクや添付ファイルを開かない",
            "公式のアプリケーションは信用できないので使用しない"
        ],
        correct: 2
    }
    // ここに追加の問題を入力できます
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionContainer = document.getElementById('question-container');
    const questionData = questions[currentQuestionIndex];

    // 問題と選択肢の表示
    questionContainer.innerHTML = `
        <h2>${questionData.question}</h2>
        <ul>
            ${questionData.options.map((option, index) => `
                <li>
                    <input type="radio" name="answer" value="${index}" id="option${index}">
                    <label for="option${index}">${option}</label>
                </li>
            `).join('')}
        </ul>
    `;
    questionContainer.style.animation = "slideIn 1s ease-out";
}

document.getElementById('next-button').addEventListener('click', function() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        const answerValue = parseInt(selectedAnswer.value);
        if (answerValue === questions[currentQuestionIndex].correct) {
            score++;
        }
        currentQuestionIndex++;
        
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            if(score <1){
                document.getElementById('score').innerHTML = `あなたのスコア: ${score} / ${questions.length}`;
                document.getElementById('result').innerHTML = `もっと学習してみましょう！`;
            }else if(score <3 && score >=1){
                document.getElementById('score').innerHTML = `あなたのスコア: ${score} / ${questions.length}`;
                document.getElementById('result').innerHTML = `おしいです！もう少し学習を進めてみましょう！`;
            }else if(score <5 && score >=3){
                document.getElementById('score').innerHTML = `あなたのスコア: ${score} / ${questions.length}`;
                document.getElementById('result').innerHTML = `おめでとうございます！もう少しで全問正解です！`;
            }else if(score ==5){
                document.getElementById('score').innerHTML = `あなたのスコア: ${score} / ${questions.length}`;
                document.getElementById('result').innerHTML = `おめでとうございます！全問正解です！`;
            }
            document.getElementById('next-button').disabled = true;
        }
    } else {
        alert('回答を選んでください。');
    }
});

// 初期化
loadQuestion();
