

$(function () {

        $('#example1').DataTable();
        $('#example2').DataTable({
            'paging': true,
            'lengthChange': false,
            'searching': false,
            'ordering': true,
            'info': true,
            'autoWidth': false
        });



        //Initialize Select2 Elements
        $('.select2').select2();

        //Datemask dd/mm/yyyy
        $('#datemask').inputmask('dd/mm/yyyy', {'placeholder': 'dd/mm/yyyy'});
        //Datemask2 mm/dd/yyyy
        $('#datemask2').inputmask('mm/dd/yyyy', {'placeholder': 'mm/dd/yyyy'});
        //Money Euro
        $('[data-mask]').inputmask()

        //Date range picker
        $('#reservation').daterangepicker()
        //Date range picker with time picker
        $('#reservationtime').daterangepicker({timePicker: true, timePickerIncrement: 30, format: 'MM/DD/YYYY h:mm A'})
        //Date range as a button
        $('#daterange-btn').daterangepicker(
            {
                ranges: {
                    'Today': [moment(), moment()],
                    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                    'This Month': [moment().startOf('month'), moment().endOf('month')],
                    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                },
                startDate: moment().subtract(29, 'days'),
                endDate: moment()
            },
            function (start, end) {
                $('#daterange-btn span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'))
            }
        )

        //Date picker
        $('#datepicker').datepicker({
            autoclose: true,
            language: 'tr',
            format: 'dd/mm/yyyy',
        })

        //Date picker
        $('#datepicker2').datepicker({
            autoclose: true,
            language: 'tr',
            format: 'dd/mm/yyyy',
        })


        $('#datepicker3').datepicker({
            autoclose: true,
            language: 'tr',
            format: 'dd/mm/yyyy',
        })

        $('#datepicker4').datepicker({
            autoclose: true,
            language: 'tr',
            format: 'dd/mm/yyyy',
        })
        $('.datepicker6').datepicker({
            autoclose: true,
            language: 'tr',
            format: 'dd/mm/yyyy',
        })
        $('#datepicker5').datepicker({
            autoclose: true,
            language: 'tr',
            format: "yyyy",
            viewMode: "years",
            minViewMode: "years"


        })


        //iCheck for checkbox and radio inputs
        $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
            checkboxClass: 'icheckbox_minimal-blue',
            radioClass: 'iradio_minimal-blue'
        })
        //Red color scheme for iCheck
        $('input[type="checkbox"].minimal-red, input[type="radio"].minimal-red').iCheck({
            checkboxClass: 'icheckbox_minimal-red',
            radioClass: 'iradio_minimal-red'
        })
        //Flat red color scheme for iCheck
        $('input[type="checkbox"].flat-red, input[type="radio"].flat-red').iCheck({
            checkboxClass: 'icheckbox_flat-green',
            radioClass: 'iradio_flat-green'
        })

        //Colorpicker
        $('.my-colorpicker1').colorpicker()
        //color picker with addon
        $('.my-colorpicker2').colorpicker()


        $(window).on('load', function () {
            $('.preloader').fadeOut('slow');
        });

        //Timepicker
        $('.timepicker').timepicker({
            showInputs: false
        })



            var salesChartCanvas = $('#salesChart2').get(0).getContext('2d');
            // This will get the first returned node in the jQuery collection.
            var salesChart = new Chart(salesChartCanvas);

            let time = new Date().getMonth();
            weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
            months = new Array('Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Agustos', 'Eylül ', 'Ekim', 'Kasım', 'Aralık');
            if (time != 1) {
                geri = months[time - 1]
            } else {
                geri = months[11]
            }
            var salesChartData = {
                labels: ['   ', geri, months[time]],

                datasets: [



                    {
                        label: 'Digital Goods',
                        fillColor: 'rgba(60,141,188,0.9)',
                        strokeColor: 'rgba(60,141,188,0.8)',
                        pointColor: '#3b8bba',
                        pointStrokeColor: 'rgba(60,141,188,1)',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(60,141,188,1)',
                        data: [200, 500, 5442],
                    }

                ]
            };

            var salesChartOptions = {
                // Boolean - If we should show the scale at all
                showScale: true,
                // Boolean - Whether grid lines are shown across the chart
                scaleShowGridLines: false,
                // String - Colour of the grid lines
                scaleGridLineColor: 'rgba(0,0,0,.05)',
                // Number - Width of the grid lines
                scaleGridLineWidth: 1,
                // Boolean - Whether to show horizontal lines (except X axis)
                scaleShowHorizontalLines: true,
                // Boolean - Whether to show vertical lines (except Y axis)
                scaleShowVerticalLines: true,
                // Boolean - Whether the line is curved between points
                bezierCurve: true,
                // Number - Tension of the bezier curve between points
                bezierCurveTension: 0.3,
                // Boolean - Whether to show a dot for each point
                pointDot: false,
                // Number - Radius of each point dot in pixels
                pointDotRadius: 4,
                // Number - Pixel width of point dot stroke
                pointDotStrokeWidth: 1,
                // Number - amount extra to add to the radius to cater for hit detection outside the drawn point
                pointHitDetectionRadius: 20,
                // Boolean - Whether to show a stroke for datasets
                datasetStroke: true,
                // Number - Pixel width of dataset stroke
                datasetStrokeWidth: 2,
                // Boolean - Whether to fill the dataset with a color
                datasetFill: true,
                // String - A legend template
                legendTemplate: ' ',
                // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
                maintainAspectRatio: true,
                // Boolean - whether to make the chart responsive to window resizing
                responsive: true
            };

            // Create the line chart
            salesChart.Line(salesChartData, salesChartOptions);



            var pieChartCanvas = $('#pieChart2').get(0).getContext('2d');
            var pieChart = new Chart(pieChartCanvas);
            var PieData = [
                {
                    value: 1678,
                    color: '#f56954',
                    highlight: '#f56954',
                    label: 'Kadın'
                },
                {
                    value: 3764,
                    color: '#00a65a',
                    highlight: '#00a65a',
                    label: 'Erkek'
                },

            ];
            var pieOptions = {
                // Boolean - Whether we should show a stroke on each segment
                segmentShowStroke: true,
                // String - The colour of each segment stroke
                segmentStrokeColor: '#fff',
                // Number - The width of each segment stroke
                segmentStrokeWidth: 1,
                // Number - The percentage of the chart that we cut out of the middle
                percentageInnerCutout: 50, // This is 0 for Pie charts
                // Number - Amount of animation steps
                animationSteps: 100,
                // String - Animation easing effect
                animationEasing: 'easeOutBounce',
                // Boolean - Whether we animate the rotation of the Doughnut
                animateRotate: true,
                // Boolean - Whether we animate scaling the Doughnut from the centre
                animateScale: false,
                // Boolean - whether to make the chart responsive to window resizing
                responsive: true,
                // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
                maintainAspectRatio: false,
                // String - A legend template
                legendTemplate: '',
                // String - A tooltip template
                tooltipTemplate: ''
            };
            // Create pie or douhnut chart
            // You can switch between pie and douhnut using the method below.
            pieChart.Doughnut(PieData, pieOptions);
            // -----------------
            // - END PIE CHART -






    })

