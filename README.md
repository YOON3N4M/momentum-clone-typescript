# momentum-clone-react
배포 https://yoon3n4m.github.io/momentum-clone-react/ <br>


## 앱 소개<br>
해당 앱은 크롬의 확장프로그램인 momentum을 클론코딩한 앱입니다. 노마드코더의 바닐라 자바스크립트 강의로 처음 접하게 되었고 강의에서 html과 자바스크립트로만 만들었던 앱을 리액트로 새로 작성해 보았습니다. 강의의 내용은 자바스크립트에 집중되어 있기에 아무런 css가 적용되지 않은 채 종료가 됩니다. 그 이후 리액트를 배우게 되었고 해당 앱을 리액트를 기반으로 css, 레이아웃 등 전체적인 디자인과 여러 기능들을 추가해 새로 만들어보게 되었습니다. 그런 과정에서 강의에서 배우지 않았던 내용들이 훨씬 많았기때문에 만드는 도중에도 독학을 통해 여러 기능들을 학습해보고 이 앱에 적용해보며 지금의 모습에 도달하게 되었습니다.

<img width="700" alt="image" src="https://user-images.githubusercontent.com/115640584/210735389-4bdded8f-5b6c-4949-9fb5-ad11d19c8de1.png">
강의 종료 직후 아무런 css도 적용되지 않은 앱의 모습 <위 이미지><br>

### 홀로 고민하며 만들어본 기능<br>

#### 배경이미지 부분 <br>
* 배경 이미지를 API로 불러와 적용하는 기능
* 불러온 배경 이미지를 설정 창에 나열하여 선택한 이미지를 배경이미지로 적용하는 기능
* 배경이미지 렌더링 도중 발생하는 버벅임을 시각적을 해결하기 위한 기능 => https://velog.io/@yoon3nam/%EB%A6%AC%EC%95%A1%ED%8A%B8-momentum-1
#### 투두 부분 <br>
* Inbox(현재 해야하는 투두) , Done(완료된 투두) 목록 구분 기능 <br> (해당 기능을 위해 투두 리스트는 3가지로 분류가 됩니다.1.todoList(전체) > 2.InboxList(done:false) 3.doneList(done:true))
* 목록 별 Clear all(전체 삭제) 기능
* Done 박스 목록들은 체크박스 체크, 글자색 변경, 글자 가운데 실금
#### 시계, 인삿말 부분 <br>
* 24시간제 시계(기본)와 오전, 오후제 시간을 선택 할 수 있는 기능
* 시간에 따라 인삿말이 바뀌는 부분 (good morning, good afternoon, good evening, good night 등)
#### 검색창 부분 <br>
* 강의에선 없던 기능이며 실제 momentum에는 있는 기능이라 간단히 만들어 보았습니다. 특별한 내용은 없습니다.

#### 설정 부분 <br>
* 설정창 자체가 강의 내용에 없었습니다. 실제 momentum에는 있는 기능이라 참고하여 일부 기능을 만들어 보았습니다.
* General 탭 - 대시보드에 보이는 검색창, 날씨, 시계, 인삿말, 투두, 명언과 같은 기능의 표시 여부를 변경 할 수 있습니다.
* Photos 탭 - API로 받아온 이미지 20개가 보여지며 이미지 클릭시 해당 이미지로 대시보드의 배경 이미지가 변경 됩니다.
* Quotes 탭 - 10가지의 명언이 보여지며, 클릭시 대시보드에 해당 명언이 출력됩니다.

### 앱기능 <br>

<img width="800" alt="image" src="https://user-images.githubusercontent.com/115640584/210745170-de503ad3-ab4d-49c3-965a-5258f02c842f.png">
처음 앱을 실행하면 해당 화면이 보여집니다. (혹은 localstorage에 username이 없다면) 여기서 입력한 내용이 username이 됩니다. <br> 날씨 API를 위한 위치 액세스의 여부를 묻는 창도 출력 됩니다. 이를 수락하지 않으면 대시보드 우측 상단에 날씨 기능이 표시되지 않습니다.<br>

<img width="800" alt="image" src="https://user-images.githubusercontent.com/115640584/210745451-bd49e2c5-863b-47cb-beea-e2613929387c.png">><br>


* 해당 화면이 이 앱의 기본 화면(대시보드) 입니다. 
* 가운데에 시계와 인삿말이 보여지며 시계에 커서를 올리면 24시간제와 오전,오후제로 변경이 가능한 옵션 버튼이 보여집니다.
* 우측상단에는 API를 통해 제공받은 위치정보를 토대로 접속 지역의 날씨를 보여줍니다. 
* 우측 하단엔 투두 창을 여는 버튼이 위치해 있으며 클릭시 투두 창이 열리게 됩니다. 
* 중앙 하단엔 10개의 명언 중 랜덤으로 1개가 보여집니다. 
* 좌측 하단엔 설정 창을 여는 버튼이 위치해 있으며 클릭시 설정 창이 열리게 됩니다.
* 좌측 상단엔 검색창이 있으며 키워드를 입력 후 엔터 입력 혹은 돋보기 이미지 클릭시 구글 검색창으로 창이 변경되며 검색이 이루어집니다.

<br>
img source from :<br>
<a target="_blank" href="https://icons8.com/icon/fcLkM6xyUJ6l/dot">Dot</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> <br>
<a target="_blank" href="https://icons8.com/icon/elSdeHsB03U3/%EC%88%98%EC%83%89">수색</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a><br>
<a target="_blank" href="https://icons8.com/icon/YhH1y9XopXFQ/settings">Settings</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
