$(document).ready(function(){

	var items = getFromLocal('memos');
	var index;
	var items2 = getFromLocal('memos2');
	var index2;
	var items3 = getFromLocal('memos3');
	var index3;
	var itemsAccordion = getFromLocal('memos1');
	var indexAcc;

	loadAcc(itemsAccordion);
	loadList(items);
	loadList2(items2);
	loadList3(items3);

/*****************************input si empty disable*************************************************** */
	$('#main-button').prop('disabled', true);
	$('#main-input').keyup(function(){
		if($(this).val().length !== 0) {
			$('#main-button').prop('disabled', false);
		} else {
			$('#main-button').prop('disabled', true);
		}
	});

	$('#main-button2').prop('disabled', true);
	$('#main-input2').keyup(function(){
		if($(this).val().length !== 0) {
			$('#main-button2').prop('disabled', false);
		} else {
			$('#main-button2').prop('disabled', true);
		}
	});

	$('#main-button3').prop('disabled', true);
	$('#main-input3').keyup(function(){
		if($(this).val().length !== 0) {
			$('#main-button3').prop('disabled', false);
		} else {
			$('#main-button3').prop('disabled', true);
		}
	});

	$('#addButton').prop('disabled', true);
	$('#accordion-input').keyup(function(){
		if($(this).val().length !== 0) {
			$('#addButton').prop('disabled', false);
		} else {
			$('#addButton').prop('disabled', true);
		}
	});
/*****************************bind input enter with button submit*************************************************** */
	$('#main-input').keypress(function(e){
		if(e.which === 13) {
			if ($('#main-input').val().length !== 0)
				$('#main-button').click();
		}
	});
	$('#main-button').click(function(){
		var value = $('#main-input').val();
		items.push(value);
		//console.log(items[0]);
		$('#main-input').val('');
		loadList(items);
		storeToLocal('memos', items);
		// set button to
		$('#main-button').prop('disabled', true);
	});

	$('#accordion-input').keypress(function(e){
		if(e.which === 13) {
			if ($('#accordion-input').val().length !== 0)
				$('#addButton').click();
		}
	});
		$('#addButton').click(function(){
			var value = $('#accordion-input').val();
			itemsAccordion.push(value);
			//console.log(itemsAccordion[0]);
			$('#accordion-input').val('');
			loadAcc(itemsAccordion);
			storeToLocal('memos1',itemsAccordion);
	
			$('#addButton').prop('disabled', true);
	
		});

	$('#main-input2').keypress(function(e){
		if(e.which === 13) {
			if ($('#main-input2').val().length !== 0)
				$('#main-button2').click();
		}
	});
	$('#main-button2').click(function(){
		var value = $('#main-input2').val();
		items2.push(value);
		//console.log(items[0]);
		$('#main-input2').val('');
		loadList2(items2);
		storeToLocal('memos2', items2);
		// set button to
		$('#main-button2').prop('disabled', true);
	});

	$('#main-input3').keypress(function(e){
		if(e.which === 13) {
			if ($('#main-input3').val().length !== 0)
				$('#main-button3').click();
		}
	});
	$('#main-button3').click(function(){
		var value = $('#main-input3').val();
		items3.push(value);
		//console.log(items[0]);
		$('#main-input3').val('');
		loadList3(items3);
		storeToLocal('memos3', items3);
		// set button to
		$('#main-button3').prop('disabled', true);
	});
/***************************Delete one item******************************************/
	/*$('ul').delegate("span", "click", function(event){
		event.stopPropagation();
		index = $('span').index(this);
		console.log(index);
		$('li').eq(index).remove();
		items.splice(index, 1);
		storeToLocal('memos', items);
	}); */

	/*$('#numero1').delegate("#deleteNumero1", "click", function(event){
		event.stopPropagation();
		index = $("#deleteNumero1").index(this);
		$('.asd1').eq(index).remove();
		items.splice(index, 1);
		storeToLocal('memos', items);
	});*/
	$('#numero1').delegate("span", "click", function(event){
		event.stopPropagation();
		index = $('span').index(this);
		console.log(index);
		$('li').eq(index).remove();
		items.splice(index, 1);
		storeToLocal('memos', items);
	});
	$('#numero2').delegate("span", "click", function(event){
		event.stopPropagation();
		index2 = $('.deleteNumero2').index(this);
		console.log(index2);
		$('li').eq(index2).remove();	
		items2.splice(index2, 1);
		storeToLocal('memos2', items2);
		loadList2(items2);
		loadList(items);
	});
	$('#numero3').delegate("span", "click", function(event){
		event.stopPropagation();
		index3 = $('.deleteNumero3').index(this);
		console.log(index3);
		$('li').eq(index3).remove();	
		items3.splice(index3, 1);
		storeToLocal('memos3', items3);
		loadList3(items3);
		loadList2(items2);
		loadList(items);
	});
	$('#accordion').delegate("span", "click", function(event){
		event.stopPropagation();
		indexAcc = $('.deleteAcc').index(this);
		$('.acc').eq(indexAcc).remove();
		itemsAccordion.splice(indexAcc, 1);
		storeToLocal('memos1', itemsAccordion);
	});
	/************************Edit one item*********************************** */
	/*$('ul').delegate('li', 'click', function(){
		index = $('li').index(this);
		var content = items[index];
		console.log(content);
		$('#edit-input').val(content );
	});

	$('#edit-button').click(function(){
		items[index] = $('#edit-input').val();
		loadList(items);
		storeToLocal("memos", items);
	});
	//bind input enter with edit task
	$('#edit-input').keypress(function(e){
		if(e.which === 13) {
			if ($('#edit-input').val().length !== 0)
				$('#edit-button').click();
		}
	});*/

	$('#numero1').delegate('.asd1','click', function(){
		index = $('.asd1').index(this);
		var content = items[index];
		console.log(content);
		$('#edit-input').val(content);
	});
	$('#edit-button').click(function(){
		items[index] = $('#edit-input').val();
		loadList(items);
		storeToLocal("memos", items);
	});
	$('#edit-input').keypress(function(e){
		if(e.which === 13) {
			if ($('#edit-input').val().length !== 0)
				$('#edit-button').click();
		}
	});

	$('#numero2').delegate('.asd2','click', function(){
		index2 = $('.asd2').index(this);
		var content = items2[index2];
		console.log(content);
		$('#edit-input2').val(content);
	});
	$('#edit-button2').click(function(){
		items2[index2] = $('#edit-input2').val();
		loadList2(items2);
		storeToLocal("memos2", items2);
	});
	$('#edit-input2').keypress(function(e){
		if(e.which === 13) {
			if ($('#edit-input2').val().length !== 0)
				$('#edit-button2').click();
		}
	});

	$('#numero3').delegate('.asd3','click', function(){
		index3 = $('.asd3').index(this);
		var content = items3[index3];
		console.log(content);
		$('#edit-input3').val(content);
	});
	$('#edit-button3').click(function(){
		items3[index3] = $('#edit-input3').val();
		loadList3(items3);
		storeToLocal("memos3", items3);
	});
	$('#edit-input3').keypress(function(e){
		if(e.which === 13) {
			if ($('#edit-input3').val().length !== 0)
				$('#edit-button3').click();
		}
	});
/******************************Load functions***************************************/
function loadAcc(itemsAccordion){
	$('.acc').remove();
	if(itemsAccordion.length > 0) {
		for(var i = 0; i < itemsAccordion.length; i++) {
			$('#accordion').append( '<div class="panel panel-default acc" > <div class="panel-heading"> <h4 class="panel-title"> <a data-toggle="collapse" href="#'+itemsAccordion[i]+' ">' +
			itemsAccordion[i] +
			'<span class="glyphicon glyphicon-remove deleteAcc" ></span</li>' +
			'</a> </h4> </div>  <div id="' + itemsAccordion[i] + '" class="panel-collapse collapse">   <ul class="list-group">   <div class="form-group">  <input id="main-input ' + itemsAccordion[i] + ' " type="text" class="form-control" placeholder="Escribe una nueva Tarea">   </div>   <button type="button" class="btn btn-success" id="main-button ' + itemsAccordion[i] + ' ">Agregar una Tarea</button> </ul> </div>  </div>');
		}
	}
	$('main-button ' + 123 + '').prop('disabled', true);
	$('main-input ' + 123 + '').keyup(function(){
		if($(this).val().length !== 0) {
			$('main-button ' + 123 + '').prop('disabled', false);
		} else {
			$('main-button ' + 123 + '').prop('disabled', true);
		}
	});
};
	function loadList(items){
		$('.asd1').remove();
		if(items.length > 0) {
			for(var i = 0; i < items.length; i++) {
				$('#numero1').append('<li class= "list-group-item asd1" data-toggle="modal" data-target="#editModal">' + items[i] + '<span class="glyphicon glyphicon-remove"  id="deleteNumero1"></span</li>');
			}
		}
	};
	function loadList2(items2){
		$('.asd2').remove();
		if(items2.length > 0) {
			for(var i = 0; i < items2.length; i++) {
				$('#numero2').append(' <li class= "list-group-item asd2" data-toggle="modal" data-target="#editModal2">' + items2[i] + '<span class="glyphicon glyphicon-remove deleteNumero2" ></span</li>');
			}
		}
	};
	function loadList3(items3){
		$('.asd3').remove();
		if(items3.length > 0) {
			for(var i = 0; i < items3.length; i++) {
				$('#numero3').append(' <li class= "list-group-item asd3" data-toggle="modal" data-target="#editModal3">' + items3[i] + '<span class="glyphicon glyphicon-remove deleteNumero3"></span</li>');
			}
		}
	};

	/********************storage and get from storage*********************** */
	function storeToLocal(key, items){
		localStorage[key] = JSON.stringify(items);
	}
	function getFromLocal(key){
		if(localStorage[key])
			return JSON.parse(localStorage[key]);
		else
			return [];
	}
});