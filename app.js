/*global angular, d3 */
 
angular.module ('charts', [])
 
.controller('MainCtrl', function($scope) {

	$scope.mockdata = {
		M1: [[
				1637089200, // Unix timestamp
				120, // number of successful requests (2xx)
				0, // number of rejected requests (4xx)
				0, // number of rate limited requests (429)
				0, // number of failed requests (5xx)
				0.011, // median API latency
				1.023, // 99th percentile API latency
				25536, // data traffic in bytes
				52 // number of unique users in time-frame
			],[
				1637089300, // Unix timestamp
				121, // number of successful requests (2xx)
				0, // number of rejected requests (4xx)
				0, // number of rate limited requests (429)
				0, // number of failed requests (5xx)
				0.016, // median API latency
				1.023, // 99th percentile API latency
				75536, // data traffic in bytes
				22 // number of unique users in time-frame
			],[
				1637089400, // Unix timestamp
				122, // number of successful requests (2xx)
				0, // number of rejected requests (4xx)
				0, // number of rate limited requests (429)
				0, // number of failed requests (5xx)
				0.013, // median API latency
				1.023, // 99th percentile API latency
				75536, // data traffic in bytes
				42 // number of unique users in time-frame
			],[
				1637089600, // Unix timestamp
				123, // number of successful requests (2xx)
				0, // number of rejected requests (4xx)
				0, // number of rate limited requests (429)
				0, // number of failed requests (5xx)
				0.012, // median API latency
				1.023, // 99th percentile API latency
				25536, // data traffic in bytes
				62 // number of unique users in time-frame
			],[
				1637089700, // Unix timestamp
				124, // number of successful requests (2xx)
				0, // number of rejected requests (4xx)
				0, // number of rate limited requests (429)
				0, // number of failed requests (5xx)
				0.017, // median API latency
				1.023, // 99th percentile API latency
				45536, // data traffic in bytes
				72 // number of unique users in time-frame
			],[
				1637089800, // Unix timestamp
				125, // number of successful requests (2xx)
				0, // number of rejected requests (4xx)
				0, // number of rate limited requests (429)
				0, // number of failed requests (5xx)
				0.013, // median API latency
				1.023, // 99th percentile API latency
				55536, // data traffic in bytes
				32 // number of unique users in time-frame
			],[
				1637089900, // Unix timestamp
				126, // number of successful requests (2xx)
				0, // number of rejected requests (4xx)
				0, // number of rate limited requests (429)
				0, // number of failed requests (5xx)
				0.018, // median API latency
				1.023, // 99th percentile API latency
				75536, // data traffic in bytes
				52 // number of unique users in time-frame
			],[
				1637090000, // Unix timestamp
				127, // number of successful requests (2xx)
				0, // number of rejected requests (4xx)
				0, // number of rate limited requests (429)
				0, // number of failed requests (5xx)
				0.013, // median API latency
				1.023, // 99th percentile API latency
				35536, // data traffic in bytes
				62 // number of unique users in time-frame
			]],
		H1:  [[
			1637189200, // Unix timestamp
			20, // number of successful requests (2xx)
			0, // number of rejected requests (4xx)
			0, // number of rate limited requests (429)
			0, // number of failed requests (5xx)
			0.010, // median API latency
			1.023, // 99th percentile API latency
			75536, // data traffic in bytes
			42 // number of unique users in time-frame
		],[
			1637289200, // Unix timestamp
			21, // number of successful requests (2xx)
			0, // number of rejected requests (4xx)
			0, // number of rate limited requests (429)
			0, // number of failed requests (5xx)
			0.05, // median API latency
			1.023, // 99th percentile API latency
			85536, // data traffic in bytes
			62 // number of unique users in time-frame
		],[
			1637389200, // Unix timestamp
			18, // number of successful requests (2xx)
			0, // number of rejected requests (4xx)
			0, // number of rate limited requests (429)
			0, // number of failed requests (5xx)
			0.018, // median API latency
			1.023, // 99th percentile API latency
			35536, // data traffic in bytes
			62 // number of unique users in time-frame
		],[
			1637489200, // Unix timestamp
			22, // number of successful requests (2xx)
			0, // number of rejected requests (4xx)
			0, // number of rate limited requests (429)
			0, // number of failed requests (5xx)
			0.013, // median API latency
			1.023, // 99th percentile API latency
			65536, // data traffic in bytes
			72 // number of unique users in time-frame
		],[
			1637589200, // Unix timestamp
			17, // number of successful requests (2xx)
			0, // number of rejected requests (4xx)
			0, // number of rate limited requests (429)
			0, // number of failed requests (5xx)
			0.010, // median API latency
			1.023, // 99th percentile API latency
			75536, // data traffic in bytes
			32 // number of unique users in time-frame
		],[
			1637689200, // Unix timestamp
			24, // number of successful requests (2xx)
			0, // number of rejected requests (4xx)
			0, // number of rate limited requests (429)
			0, // number of failed requests (5xx)
			0.018, // median API latency
			1.023, // 99th percentile API latency
			35536, // data traffic in bytes
			62 // number of unique users in time-frame
		],[
			1637789200, // Unix timestamp
			18, // number of successful requests (2xx)
			0, // number of rejected requests (4xx)
			0, // number of rate limited requests (429)
			0, // number of failed requests (5xx)
			0.012, // median API latency
			1.023, // 99th percentile API latency
			55536, // data traffic in bytes
			32 // number of unique users in time-frame
		],[
			1637889200, // Unix timestamp
			19, // number of successful requests (2xx)
			0, // number of rejected requests (4xx)
			0, // number of rate limited requests (429)
			0, // number of failed requests (5xx)
			0.016, // median API latency
			1.023, // 99th percentile API latency
			25536, // data traffic in bytes
			72 // number of unique users in time-frame
			]],
		D:  [[
			1637089200, // Unix timestamp
			45, // number of successful requests (2xx)
			0, // number of rejected requests (4xx)
			0, // number of rate limited requests (429)
			0, // number of failed requests (5xx)
			0.013, // median API latency
			1.023, // 99th percentile API latency
			65536, // data traffic in bytes
			72 // number of unique users in time-frame
		],[
			2637089200, // Unix timestamp
			20, // number of successful requests (2xx)
			0, // number of rejected requests (4xx)
			0, // number of rate limited requests (429)
			0, // number of failed requests (5xx)
			0.018, // median API latency
			1.023, // 99th percentile API latency
			75536, // data traffic in bytes
			82 // number of unique users in time-frame
		],[
			3637089200, // Unix timestamp
			55, // number of successful requests (2xx)
			0, // number of rejected requests (4xx)
			0, // number of rate limited requests (429)
			0, // number of failed requests (5xx)
			0.011, // median API latency
			1.023, // 99th percentile API latency
			35536, // data traffic in bytes
			32 // number of unique users in time-frame
		],[
			4637089200, // Unix timestamp
			30, // number of successful requests (2xx)
			0, // number of rejected requests (4xx)
			0, // number of rate limited requests (429)
			0, // number of failed requests (5xx)
			0.016, // median API latency
			1.023, // 99th percentile API latency
			75536, // data traffic in bytes
			72 // number of unique users in time-frame
		],[
			5637089200, // Unix timestamp
			50, // number of successful requests (2xx)
			0, // number of rejected requests (4xx)
			0, // number of rate limited requests (429)
			0, // number of failed requests (5xx)
			0.012, // median API latency
			1.023, // 99th percentile API latency
			45536, // data traffic in bytes
			42 // number of unique users in time-frame
		],[
			6637089200, // Unix timestamp
			20, // number of successful requests (2xx)
			0, // number of rejected requests (4xx)
			0, // number of rate limited requests (429)
			0, // number of failed requests (5xx)
			0.019, // median API latency
			1.023, // 99th percentile API latency
			75536, // data traffic in bytes
			62 // number of unique users in time-frame
		],[
			7637089200, // Unix timestamp
			35, // number of successful requests (2xx)
			0, // number of rejected requests (4xx)
			0, // number of rate limited requests (429)
			0, // number of failed requests (5xx)
			0.011, // median API latency
			1.023, // 99th percentile API latency
			35536, // data traffic in bytes
			32 // number of unique users in time-frame
		],[
			8637089200, // Unix timestamp
			40, // number of successful requests (2xx)
			0, // number of rejected requests (4xx)
			0, // number of rate limited requests (429)
			0, // number of failed requests (5xx)
			0.013, // median API latency
			1.023, // 99th percentile API latency
			55536, // data traffic in bytes
			82 // number of unique users in time-frame
			]]
	}           
	
	$scope.objdata = {data:"Requests", graph:"Bar", time:"M1"}
	
	

	$scope.updateData = function ({ data, graph, time }) {

		let newLabels = {};
		if (data) newLabels.data = data; else newLabels.data = $scope.objdata.data;
		if (graph) newLabels.graph = graph; else newLabels.graph = $scope.objdata.graph;
		if (time) newLabels.time = time; else newLabels.time = $scope.objdata.time;

		$scope.objdata = newLabels;

		$scope.prepareData();
	}


	$scope.prepareData = function () {

		console.log("objdata.data");
		console.log($scope.objdata);

		// var datahold = $scope.mockdata.M1;
		// var yaxis_index = 1;
		// var data_type = $scope.objdata.data;
		// var tm = $scope.objdata.time;
		// var tm_lable = tm;

		$scope.datahold = $scope.mockdata.M1;
		$scope.yaxis_index = 1;
		$scope.data_type = $scope.objdata.data;
		$scope.tm = $scope.objdata.time;
		$scope.tm_lable = $scope.tm;

        $scope.yaxis_index = ($scope.data_type === "Requests") ? 1 
            :($scope.data_type === "Latency") ? 5
            :($scope.data_type === "Trafic") ? 7
            :($scope.data_type === "Users") ? 8
            :1;

		$scope.datahold = ($scope.tm === "M1") ? $scope.mockdata.M1 
            :($scope.tm === "H1") ? $scope.mockdata.H1 
            :($scope.tm === "D") ? $scope.mockdata.D
            :$scope.mockdata.M1;

		$scope.tm_lable = ($scope.tm === "M1") ? 'Minute Time Frame' 
            :($scope.tm === "H1") ? 'Hourly Time Frame' 
            :($scope.tm === "D") ? 'Daily Time Frame'  
            :'Minute Time Frame';


    }

	$scope.$watch (
		"objdata",
		function () {
			$scope.prepareData();
		},
		true
	);

})
 

.directive ("barChart", function () {
	return {
		restrict : "A",
		link : function (scope, element) {
			drawChart();

			//   Plot Draw Chart
			function drawChart() {
				const width = 1000;
				const height = 450;
		
				const svg = d3.select('#BarChart')
					.html('')
					.append('svg')
					.attr('id', 'chart')
					.attr('width', width)
					.attr('height', height);
		
				const margin = {
					top: 60,
					bottom: 100,
					left: 80,
					right: 40
				};
		
				const chart = svg.append('g')
					.classed('display', true)
					.attr('transform', `translate(${margin.left},${margin.top})`);
		
				const chartWidth = width - margin.left - margin.right;
				const chartHeight = height - margin.top - margin.bottom
				plot(chart, chartWidth, chartHeight);
		
			}
		
			//   Plot Bar Chart
			function plot(chart, width, height) {
				
				var data = scope.datahold;
				var diff = Math.abs(data[0][scope.yaxis_index] - data[1][scope.yaxis_index]);
		
				// create scales!
				const xScale = d3.scaleBand()
					.domain(data.map(d => timeConverter(d[0])))
					.range([0, width]);
				const yScale = d3.scaleLinear()
					.domain([(d3.min(data, d => d[scope.yaxis_index]) - diff), d3.max(data, d => d[scope.yaxis_index])])
					.range([height, 0]);
				const colorScale = d3.scaleOrdinal(d3.schemeCategory10);
		
				// Define the div for the tooltip
				var div = d3.select("body").append("div")	
				.attr("class", "tooltip")				
				.style("opacity", 0);
		
				chart.selectAll('.bar')
					.data(data)
					.enter()
					.append('rect')
					.classed('bar', true)
					.attr('x', d => (xScale(timeConverter(d[0])) + 25 ))
					.attr('y', d => yScale(d[scope.yaxis_index]))
					.attr('height', d => (height - yScale(d[scope.yaxis_index])))
					.attr('width', d => xScale.bandwidth())
					.style('fill', (d, i) => colorScale(i))
					.on("mouseover", function(event, d) {	
						console.log(xScale(timeConverter(d[0])));	
						console.log(d);	
						div.transition()		
							.duration(200)		
							.style("opacity", .9);		
						div	.html("<p>"+ timeConverter(d[0]) +" against "+ d[scope.yaxis_index] +"</p>")	
							.style("left",  event.clientX + "px")		
							.style("top", event.clientY + "px");	
						})					
					.on("mouseout", function(d) {		
						div.transition()		
							.duration(500)		
							.style("opacity", 0);	
					});
		
					function timeConverter(UNIX_timestamp){
						var a = new Date(UNIX_timestamp * 1000);
						var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
						var year = a.getFullYear();
						var month = months[a.getMonth()];
						var date = a.getDate();
						var hour = a.getHours();
						var min = a.getMinutes();
						var sec = a.getSeconds();
						var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
						return time;
					}
		
				chart.selectAll('.bar-label')
					.data(data)
					.enter()
					.append('text')
					.classed('bar-label', true)
					.attr('x', d => xScale(timeConverter(d[0])) + xScale.bandwidth()/2)
					.attr('dx', 0)
					.attr('y', d => yScale(d[scope.yaxis_index]))
					.attr('dy', -6)
					.text(d => d[scope.yaxis_index]);
		
				const xAxis = d3.axisBottom()
					.scale(xScale);
					
				chart.append('g')
					.classed('x axis', true)
					.attr('transform', `translate(0,${height})`)
					.call(xAxis);
		
				const yAxis = d3.axisLeft()
					.ticks(5)
					.scale(yScale);
		
				chart.append('g')
					.classed('y axis', true)
					.attr('transform', 'translate(0,0)')
					.call(yAxis);
		
				chart.select('.x.axis')
					.append('text')
					.attr('x',  width/2)
					.attr('y', 60)
					.attr('fill', '#000')
					.style('font-size', '20px')
					.style('text-anchor', 'middle')
					.text(scope.tm_lable);    
					
				chart.select('.y.axis')
					.append('text')
					.attr('x', 0)
					.attr('y', 0)
					.attr('transform', `translate(-50, ${height/2}) rotate(-90)`)
					.attr('fill', '#000')
					.style('font-size', '20px')
					.style('text-anchor', 'middle')
					.text(scope.data_type);   
					
				const yGridlines = d3.axisLeft()
					.scale(yScale)
					.ticks(5)
					.tickSize(-width,0,0)
					.tickFormat('')
				
			}

		},
		template : '<div><div><br></br> {{objdata.graph}} Graph of <b>{{objdata.data}}</b> against <b>{{objdata.time}} time frame</b></div><br></br><div id="BarChart"></div> </div>'
	};
})


.directive ("lineChart", function () {

	return {
		restrict : "A",
		link : function (scope, element) {
			var data = scope.datahold;
			var diff = Math.abs(data[0][scope.yaxis_index] - data[1][scope.yaxis_index]);


			// Generate random data for our line where x is [0,15) and y is between 0 and 100
			let lineData = []
			for(let i = 0; i < 15; i++) {
				lineData.push({x: i + 1, y: Math.round(Math.random() * 100)})
			}

			const width = 1000;
			const height = 300;

			// Create our scales to map our data values(domain) to coordinate values(range)
			let xScale = d3.scaleBand()
				.domain(data.map(d => timeConverter(d[0])))
				.range([0, width]);
				
			let yScale = d3.scaleLinear()
				.domain([d3.min(data, d => d[scope.yaxis_index]) - diff, d3.max(data, d => d[scope.yaxis_index])])
				.range([height, 0]);

			// Generate a path with D3 based on the scaled data values
			let line = d3.line()
				.x(dt => (xScale(timeConverter(dt[0])) + 63))
				.y(dt => yScale(dt[scope.yaxis_index]))
			
			// Generate the x and y Axis based on these scales
			let xAxis = d3.axisBottom(xScale)
			let yAxis = d3.axisLeft(yScale)

			d3.select('#LineChart').selectAll("g").remove()
			
			// Create the horizontal base line
			d3.select('#LineChart').selectAll('path').datum(data) // Bind our data to the path element
			.attr('d', d3.line().x(dt => (xScale(timeConverter(dt[0])) + 63)) // Set the path to our line function, but where x is the corresponding x
			.y(yScale(0))).attr("stroke", "blue").attr('fill', 'none') // Set the y to always be 0 and set stroke and fill color
			.style('font-size', '20px')
			
			// Define the div for the tooltip
			var div = d3.select("body").append("div")	
			.attr("class", "tooltip")				
			.style("opacity", 0);
			
			d3.select('#LineChart').selectAll("circle").remove()
			// Add the scatterplot
			d3.select('#LineChart').selectAll("dot")	
			.data(data)			
			.enter().append("circle")								
			.attr("r", 5)		
			.attr("cx", function(dt) { return xScale(timeConverter(dt[0])) + 63 ; })		 
			.attr("cy", function(dt) { return yScale(dt[scope.yaxis_index]); })		
			.on("mouseover", function(event, dt) {
				console.log(event);
				div.transition()		
					.duration(200)		
					.style("opacity", .9);		
				div	.html(timeConverter(dt[0]) + "<br/> by <br/>"  + dt[scope.yaxis_index])	
					.style("left", event.clientX + "px")		
					.style("top", event.clientY + "px");	
				})					
			.on("mouseout", function(d) {		
				div.transition()		
					.duration(500)		
					.style("opacity", 0);	
			});

			function timeConverter(UNIX_timestamp){
				var a = new Date(UNIX_timestamp * 1000);
				var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
				var year = a.getFullYear();
				var month = months[a.getMonth()];
				var date = a.getDate();
				var hour = a.getHours();
				var min = a.getMinutes();
				var sec = a.getSeconds();
				var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
				return time;
			}


			d3.select('#LineChart').selectAll('path').transition().duration(1000) // Transition the line over 1 sec
			.attr('d', line) // Set the path to our line variable (Which corresponds the actual path of the data)
			
			// Append the Axis to our LineChart svg
			d3.select('#LineChart').append("g")
			.classed('x axis', true)
			.attr("transform", "translate(0, 300)").call(xAxis)

			d3.select('#LineChart').append("g")
			.classed('y axis', true)
			.attr("transform", "translate(0, 0)").call(yAxis)

			d3.select('#LineChart').select('.x.axis')
				.append('text')
				.attr('x',  width/2)
				.attr('y', 60)
				.attr('fill', '#000')
				.style('font-size', '20px')
				.style('text-anchor', 'middle')
				.text(scope.tm_lable);    
				
			d3.select('#LineChart').select('.y.axis')
				.append('text')
				.attr('x', 0)
				.attr('y', 0)
				.attr('transform', `translate(-50, ${height/2}) rotate(-90)`)
				.attr('fill', '#000')
				.style('font-size', '20px')
				.style('text-anchor', 'middle')
				.text(scope.data_type);  
	
		},
		template : '<div><div><br></br> {{objdata.graph}} Graph of <b>{{objdata.data}}</b> against <b>{{objdata.time}} time frame</b></div><br></br><div class="linecontainer"><svg id="LineChart" width = "350" height = "350"><path/></svg> </div></div>'
	};

});