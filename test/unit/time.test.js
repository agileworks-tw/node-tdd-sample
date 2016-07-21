describe('測試設定時間', () => {

  // 準備環境，new 一個 Date 物件
  let today = null;
  beforeEach(async (done) => {
    try {
      today = new Date();
      done()
    } catch (e) {
      done(e)
    }
  });

  // 這項目中的一項小測試
  it('設定日期', async (done) => {
    try {
      // 準備資料，我們會把日期設定為 1 號
      let newDate = 1;

      // 定義輸入，setDate 要給予一個數字的參數
      // 執行 function
      today.setDate(newDate);

      // 驗證輸出
      let check = today.getDate();
      check.should.be.eq(newDate);
      done();
    } catch (e) {
      done(e)
    }
  });

  it('.only 能單獨測試', async (done) => done());

  it.skip('略過測試', async (done) => done());

  afterEach(async (done) => {
    // 測試完成後把 today 清空，以便下次測試
    today = null;
    done()
  })

});
