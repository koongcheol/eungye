/**
 * 구글폼 응답 시트 → 통계 숫자만 내보내는 스크립트
 * 학생 개별 응답(이름 등)은 밖으로 나가지 않고, 집계 결과만 공개됩니다.
 * 설치 방법은 README.md 3단계를 보세요.
 */
function doGet() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  var rows = sheet.getDataRange().getValues();
  var head = rows.shift() || [];

  function col(word) {
    for (var i = 0; i < head.length; i++) if (String(head[i]).indexOf(word) > -1) return i;
    return -1;
  }
  var ri = col('결과'), gi = col('학년'), ci = col('상담');

  var out = { total: 0, result: {}, grade: {}, consult: 0, updated: new Date().toISOString() };
  rows.forEach(function (r) {
    if (ri > -1 && r[ri] === '') return;          // 빈 줄 건너뛰기
    out.total++;
    if (ri > -1) { var v = String(r[ri]); out.result[v] = (out.result[v] || 0) + 1; }
    if (gi > -1) { var g = String(r[gi]); out.grade[g] = (out.grade[g] || 0) + 1; }
    if (ci > -1 && String(r[ci]) === '예') out.consult++;
  });

  return ContentService.createTextOutput(JSON.stringify(out))
    .setMimeType(ContentService.MimeType.JSON);
}
