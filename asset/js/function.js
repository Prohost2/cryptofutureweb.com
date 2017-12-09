  $( function() {
    $( "#accordion" ).accordion();
  } );

  $(document).ready(function() {

    base_url = "http://localhost/belen/index.php/";
  	
    $("#save_filed").click(function(event) {
      $.post(base_url+'insertFiled', {'filed_name': $('#filed_type').val(),'filed_type': $('#filed_type').val() }, function(data, textStatus, xhr) {
        alert($("#filed_type").val());
      });
    });

    $(".delete").click(function(event) {
  		var drop = confirm('Surely you want to delete?');
        if (drop == true) 
          {
            confirm('Surely you want to delete?');
          }
  	});

    $('#upc').keyup(function(event) {
    var id = $(this).attr('id');
    var options = {

    url: base_url+'Home/consultAjaxPoduct/',

    getValue: "upc",

    list: {
      match: {
        enabled: true
      }
  }
};

$("#upc").easyAutocomplete(options);
/**/
  });

    $('#upc_13').keyup(function(event) {
    var id = $(this).attr('id');
    var options = {

    url: base_url+'Home/consultAjaxPoduct/',

    getValue: "upc_13",

    list: {
      match: {
        enabled: true
      }
  }
};

$("#upc_13").easyAutocomplete(options);
/**/
  });
    $('#asin').keyup(function(event) {
    var id = $(this).attr('id');
    var options = {

    url: base_url+'Home/consultAjaxPoduct/',

    getValue: "asin",

    list: {
      match: {
        enabled: true
      }
  }
};

$("#asin").easyAutocomplete(options);
/**/
  });

/*Auto completador para parent*/
    $('#parent').keyup(function(event) {
    var id = $(this).attr('id');
    var options = {

    url: base_url+'Home/consultAjaxPoduct/',

    getValue: "sku",

    list: {
      match: {
        enabled: true
      }
  }
};

$("#upc_13").easyAutocomplete(options);

});

        $(".modelo").change(function(event) {

          if ($('#valor').val() == "m" && $('#imp').val() == "in") 
            {
                $('#lg_v').val($('#lg').val()*39.370);
                $('#a_v').val($('#a').val()*39.370);
                $('#an_v').val($('#an').val()*39.370);
              }else if($('#valor').val() == "cm" && $('#imp').val() == "in"){

                  $('#lg_v').val($('#lg').val()*0.3937);
                  $('#a_v').val($('#a').val()*0.3937);
                  $('#an_v').val($('#an').val()*0.3937);            

                }else if($('#valor').val() == "mm" && $('#imp').val() == "in"){
                  $('#lg_v').val($('#lg').val()*0.03937);
                  $('#a_v').val($('#a').val()*0.03937);
                  $('#an_v').val($('#an').val()*0.03937); 

                }else if($('#valor').val() == "m" && $('#imp').val() == "ft"){
                  $('#lg_v').val($('#lg').val()*3.280);
                  $('#a_v').val($('#a').val()*3.280);
                  $('#an_v').val($('#an').val()*3.280);                  
                }else if($('#valor').val() == "cm" && $('#imp').val() == "ft"){
                  $('#lg_v').val($('#lg').val()*0.03280);
                  $('#a_v').val($('#a').val()*0.03280);
                  $('#an_v').val($('#an').val()*0.03280);                  
                }else if($('#valor').val() == "mm" && $('#imp').val() == "ft"){
                  $('#lg_v').val($('#lg').val()*0.00328);
                  $('#a_v').val($('#a').val()*0.00328);
                  $('#an_v').val($('#an').val()*0.00328);                  
                }

        });    

  });
  
  var app = angular.module('MyApp', []);

  app.controller('firstCtrl',function ($scope) {
  	$scope.SKU = "";
  })

  app.controller('myCtrl', function($scope) {

});