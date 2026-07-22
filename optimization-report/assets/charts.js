(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var accent2 = style.getPropertyValue('--accent-dim').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();
  var danger = style.getPropertyValue('--danger').trim();
  var warning = style.getPropertyValue('--warning').trim();
  var success = style.getPropertyValue('--success').trim();

  // --- Chart: Asset Type Distribution (Pie) ---
  var chart1 = echarts.init(document.getElementById('chart-asset-type'), null, { renderer: 'svg' });
  chart1.setOption({
    animation: false,
    tooltip: {
      trigger: 'item',
      appendToBody: true,
      formatter: '{b}: {c}MB ({d}%)'
    },
    legend: {
      orient: 'vertical',
      right: '5%',
      top: 'center',
      textStyle: { color: muted, fontSize: 12 }
    },
    color: [danger, warning, accent, muted, success],
    series: [{
      type: 'pie',
      radius: ['45%', '70%'],
      center: ['35%', '50%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 4,
        borderColor: bg2,
        borderWidth: 2
      },
      label: { show: false },
      emphasis: {
        label: {
          show: true,
          fontSize: 14,
          fontWeight: 'bold',
          color: ink
        }
      },
      labelLine: { show: false },
      data: [
        { value: 465, name: 'PNG 图片' },
        { value: 107, name: 'MP4 视频' },
        { value: 25, name: 'GIF 动图' },
        { value: 11, name: 'JPG 图片' },
        { value: 1.2, name: 'HTML/CSS/JS' }
      ]
    }]
  });

  // --- Chart: Issues by Dimension × Priority (Stacked Bar) ---
  var chart2 = echarts.init(document.getElementById('chart-issues'), null, { renderer: 'svg' });
  chart2.setOption({
    animation: false,
    tooltip: {
      trigger: 'axis',
      appendToBody: true,
      axisPointer: { type: 'shadow' }
    },
    legend: {
      data: ['高优先级', '中优先级', '低优先级'],
      textStyle: { color: muted, fontSize: 12 },
      top: 0
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: '15%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      axisLine: { lineStyle: { color: rule } },
      axisLabel: { color: muted },
      splitLine: { lineStyle: { color: rule, type: 'dashed' } }
    },
    yAxis: {
      type: 'category',
      data: ['性能优化', '代码质量', '用户体验', 'SEO', '工程化'],
      axisLine: { lineStyle: { color: rule } },
      axisLabel: { color: ink, fontSize: 12 }
    },
    series: [
      {
        name: '高优先级',
        type: 'bar',
        stack: 'total',
        itemStyle: { color: danger, borderRadius: [0, 0, 0, 0] },
        barWidth: 20,
        data: [4, 3, 2, 3, 1]
      },
      {
        name: '中优先级',
        type: 'bar',
        stack: 'total',
        itemStyle: { color: warning },
        data: [2, 1, 3, 1, 2]
      },
      {
        name: '低优先级',
        type: 'bar',
        stack: 'total',
        itemStyle: { color: success, borderRadius: [0, 4, 4, 0] },
        data: [0, 0, 0, 1, 1]
      }
    ]
  });

  window.addEventListener('resize', function() {
    chart1.resize();
    chart2.resize();
  });
})();
