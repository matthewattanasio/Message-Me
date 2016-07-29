
module.exports = {

  init: function() {
    localStorage.clear();
    localStorage.setItem('messages', JSON.stringify([
    		{
    			id: "1",
    			name: "Matt",
    			msg: "Mad dog fuck yeah",
    		},
    		{
    			id: "2",
    			name: "Matt",
    			msg: "Mad dog 1",
    		},
    		{
    			id: "3",
    			name: "Matt",
    			msg: "Mad 2",
    		},
    		{
    			id: "4",
    			name: "Matt",
    			msg: "Mad 3",
    		},
    		{
    			id: "5",
    			name: "Matt",
    			msg: "Mad 4",
    		},
    		{
    			id: "6",
    			name: "Matt",
    			msg: "Mad 5",
    		},
    ]));
  }
};
