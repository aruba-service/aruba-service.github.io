let app = new Vue({
	el: "#app",
	data: {
		nf: 0,
		sf: 0,
		
	},
	computed: {
		rebate() {
			if (this.nf != 0 && this.sf != 0) {
				return 1.00;
			} else {
				return 0;
			}
		},
		price() {
			return (this.nf * 3.00 + this.sf * 3.00) - this.rebate;
		}
	}
})