// Single state object
var state = {
    items: [],
 
};

// State modification functions
var addItem = function(item) {
    // return state.items.concat([item])
    state.items.push({
        name: item,
        checked: false
    });
   
    // console.log(item);
    // console.log(state);
};



// Render functions
var renderList = function() {
    var itemsHTML = state.items.map(function(item,index,checked) {
        // console.log(item)
        var checkHTML=''
    if(state.items[index].checked===true){
        checkHTML = ' shopping-item__checked'
    }

        return '<li id='+index+'><span class="shopping-item js-shopping-item'+ checkHTML+'">'+item.name+'</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>'
    

    });
    $('.shopping-list').html(itemsHTML);
    console.log(itemsHTML);
};

var removeItem = function(index){
var left = state.items.slice(0,index)
console.log(state.items)
// var rightIndex = index+1
var right = state.items.slice(index+1)
console.log(right)
state.items = left.concat(right);
console.log(left)
console.log(state.items)
renderList()
}

var addClass = function(index){

// console.log(state.items[index])
if(state.items[index].checked===false){
    state.items[index].checked=true
}
else {
    state.items[index].checked=false
}


}

// Event listeners
$('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    event.stopPropagation();
    var item=addItem($('#shopping-list-entry').val());
   // console.log(item)
    renderList();
    
    $('#shopping-list-entry').val('');
});

$('.shopping-list').on('click','.shopping-item-toggle',function(event) {
    event.preventDefault();
    event.stopPropagation();
    var index= parseInt($(event.target).closest("li")[0].id);
    addClass(index)
    renderList()

    
});


$('.shopping-list').on('click','.shopping-item-delete',function(event) {
    event.preventDefault();
    event.stopPropagation();
    var index= parseInt($(event.target).closest("li")[0].id);
    removeItem(index)
    // $(event.target).closest("li").remove();
  
});
renderList()