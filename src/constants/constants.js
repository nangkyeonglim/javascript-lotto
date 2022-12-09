const LOTTO = Object.freeze({
  min: 1,
  max: 45,
  numberCount: 6,
});

const GRADE = {
  first: {
    duplicateCount: 6,
    extraText: '',
    prize: 2_000_000_000,
  },
  second: {
    duplicateCount: 5,
    extraText: ', 보너스 볼 일치',
    prize: 30_000_000,
  },
  third: {
    duplicateCount: 5,
    extraText: '',
    prize: 1_500_000,
  },
  fourth: {
    duplicateCount: 4,
    extraText: '',
    prize: 50_000,
  },
  fifth: {
    duplicateCount: 3,
    extraText: '',
    prize: 5_000,
  },
};

const READ_MESSAGE = Object.freeze({
  purchaseMoney: '구입금액을 입력해 주세요.\n',
  winningNumber: '당첨 번호를 입력해 주세요.\n',
  bonusNumber: '보너스 번호를 입력해 주세요.\n',
});

const PRINT_MESSAGE = Object.freeze({
  lottoPurchaseCount: (count) => `${count}개를 구매했습니다.`,
  lottos: (lotto) => `[${lotto}]`,
  lottoSeperator: ', ',
  resultTitle: `당첨통계\n---`,
  winningResult: (grade, gradeCount) =>
    `${GRADE[grade].duplicateCount}개 일치${GRADE[grade].extraText} (${GRADE[grade].prize}원) - ${gradeCount}개`,
  profitRate: (profitRate) => `총 수익률은 ${profitRate}%입니다.`,
});

module.exports = {
  LOTTO,
  GRADE,
  READ_MESSAGE,
  PRINT_MESSAGE,
};
