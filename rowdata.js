exports.infonavigation = {
  review: 100,
  ask: 150,
};

exports.info = ["/image/info1.png", "/image/info2.png", "/image/info3.png"];

exports.review = {
  avgrate: 3.6,
  rates: [1000, 200, 30, 3, 1],
  total: 1234,
  totalPage: 9,
  content: [
    {
      avatar: "/image/profile1.png",
      nickname: "그린어스",
      rate: 5,
      date: "2023.12.31",
      liked: true,
      likedCount: 99,
      content:
        "거품도 잘 나고 배송도 빠르네요! 아주 만족합니다. 거품도 잘 나고 배송도 빠르네요! 제품리뷰가 3줄까지 들어갑니다 제품리뷰가 3줄까지 들어갑니다 제품리뷰가 3줄까지 들어갑니다 제품리뷰가 3줄까지 들어갑니다 제품리뷰가 3줄까지 들어갑니다 제품리뷰가 3줄까지 들어갑니다 제품리뷰가 3줄까지 들어갑니다 제품리뷰가 3줄까지 들어갑니다 제품리뷰가 3줄까지 들어갑니다 제품리뷰가 3줄까지 들어갑니다 제품리뷰가 3줄까지 들어갑니다 제품리뷰가 3줄까지 들어갑",
      photo: [
        "/image/comment1.png",
        "/image/comment2.png",
        "/image/comment3.png",
      ],
    },
    {
      avatar: "/image/profile2.png",
      nickname: "Green0190",
      rate: 1,
      date: "2023.11.11",
      liked: true,
      likedCount: 0,
      content: "잘 쓰겠습니다",
      photo: [],
    },
    {
      avatar: "/image/profile3.png",
      nickname: "ZERO",
      rate: 2,
      date: "2023.11.11",
      liked: true,
      likedCount: 0,
      content: "빠른 배송 감사합니다. 추천합니다",
      photo: ["/image/comment4.png", "/image/comment5.png"],
    },
  ],
};

exports.delivery = {
  delivery: [
    "일반택배",
    "3000원 (50,000원 이상 무료배송)",
    "3000원",
    "배송불가 지역이 없습니다.",
  ],
  return: [
    "3000원 (최초 배송비가 무료인 경우 6000원 부과),6000원,(12345) 서울 송파구 도로명주소 55길 33 1층 그리너스",
    "6000원",
    "(12345) 서울 송파구 도로명주소 55길 33 1층 그리너스",
  ],
};

exports.ask = {
  totalElement: 456,
  categoryElement: [156, 106, 10, 30, 10],
  totalPage: 9,
  content: [
    {
      id: 1,
      title: "제품 용량 문의 드립니다",
      category: "제품문의",
      nickname: "us",
      date: "2023.01.05",
      content: "각 종류별로 용량은 차이가 없나요?",
      answer: "",
      answered: false,
      secret: true,
    },
    {
      id: 2,
      title: "이번달에 살 수 있나요?",
      category: "기타",
      nickname: "gr",
      date: "2023.01.04",
      content:
        "린스바만 계속 기다리는데 재입고 언제될까요?ㅠㅠ\n빨리 입고해주세요",
      answer:
        "안녕하세요 동구밭 입니다 =]\n문의 주신 린스바는 원료 수급이 원활하지 못해 제작 과정에 어려움을 겪고 있었으나,\n현재 원료 확보된 상태로 밤낮으로 생산에 힘을 쓰고 있어 6월 중순 입고될 예정입니다ㅜㅜ\n빠른 입고 될 수 있도록 최대한 노력하겠습니다. 동구밭을 찾아주셔서 감사합니다! 좋은 하루 보내세요 = ]",
      answered: true,
      secret: false,
    },
    {
      id: 3,
      title: "이번달에 살 수 있나요?",
      category: "배송문의",
      nickname: "kh",
      date: "2023.01.04",
      content: "제품 카테고리 문의",
      answer:
        "안녕하세요 동구밭 입니다 =] 문의 주신 린스바는 원료 수급이 원활하지 못해 제작 과정에 어려움을 겪고 있었으나, 현재 원료 확보된 상태로 밤낮으로 생산에 힘을 쓰고 있어 6월 중순 입고될 예정입니다ㅜㅜ빠른 입고 될 수 있도록 최대한 노력하겠습니다. 동구밭을 찾아주셔서 감사합니다! 좋은 하루 보내세요 = ]",
      answered: true,
      secret: true,
    },
    {
      id: 4,
      title: "4일 출고 예정으로 되어 있었는데 18일 이후 출고 되는건가요?",
      category: "기타",
      nickname: "ks",
      date: "2023.01.03",
      content: "출고 날짜가 계속 변동되는데 정확한 날짜를 알려주세요",
      answer:
        "안녕하세요 출고 날짜는 현재 18일 이후로 예상됩니다 불편을 드린점 양해 부탁드립니다. 구매 취소를 원하시면 구매하신 페이지에서 취소처리 하실수 있습니다. 감사합니다.",
      answered: true,
      secret: false,
    },
    {
      id: 5,
      title: "이번달에 살 수 있나요?",
      category: "기타",
      nickname: "ee",
      date: "2023.01.03",
      content:
        "린스바만 계속 기다리는데 재입고 언제될까요?ㅠㅠ\n 빨리 입고해주세요",
      answer:
        "안녕하세요 동구밭 입니다 =]\n 문의 주신 린스바는 원료 수급이 원활하지 못해 제작 과정에 어려움을 겪고 있었으나,\n 현재 원료 확보된 상태로 밤낮으로 생산에 힘을 쓰고 있어 6월 중순 입고될 예정입니다ㅜㅜ\n빠른 입고 될 수 있도록 최대한 노력하겠습니다. 동구밭을 찾아주셔서 감사합니다! 좋은 하루 보내세요 = ]",
      answered: true,
      secret: true,
    },
  ],
};
