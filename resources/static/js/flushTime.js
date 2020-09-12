
    // 格式化时间，不足两位补0
    function format(params) {
      return params < 10 ? '0' + '' + params : params;
    }
    // 定时更新时间
    function flushTime() {
      var myDate = new Date();
      var currentDay = format(myDate.getUTCFullYear()) + '/' +
        format(myDate.getMonth() + 1) + '/' +
        format(myDate.getDate());
      var currenTime = format(myDate.getHours()) + ':' + format(myDate.getMinutes()) + ':' + format(myDate.getSeconds());
      var currentWeek = '';
      var currentUser = '管理员';
      switch (myDate.getDay()) {
        case 0: currentWeek = '星期日';
          break;
        case 1: currentWeek = '星期一';
          break;
        case 2: currentWeek = '星期二';
          break;
        case 3: currentWeek = '星期三';
          break;
        case 4: currentWeek = '星期四';
          break;
        case 5: currentWeek = '星期五';
          break;
        case 6: currentWeek = '星期六';
          break;
      }
      $('#currentDay').html('日期: ' + currentDay);
      $('#currenTime').html('时间: ' + currenTime);
      $('#currentWeek').html('星期: ' + currentWeek);
      $('#currentUser').html('用户: ' + currentUser);
      // console.log(currentWeek);
      // console.log('1');
    }
    setInterval(flushTime, 1000);
