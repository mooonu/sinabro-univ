# sinabro-univ-calender

### git flow

- main : 배포 가능한 상태만을 관리
- develop : 기능 개발을 위한 브랜치들을 병합하기 위해 사용, 테스트 후 안정적이면 main과 병합
  -> 평소에는 이 브랜치를 기반으로 개발
- feature : 기능 개발 브랜치
  1. develop 브랜치에서 feature 브랜치를 분기한다.
     [feature/기능요약] ex) feature/login 형식으로 만들어주세요
  2. 새로운 기능 개발
  3. 개발이 끝나면 develop 브랜치로 병합하고 테스트 해주세요
  4. 더 이상 필요하지 않은 feature 브랜치는 삭제해주세요
  5. 이상이 없다면 develop 브랜치를 push 하고 pull request 를 보내주세요