SimpleSchema.debug = true;

Schemas = {
	createdAt: {
		type: Date,
		autoValue: function () {
			if (this.isInsert) {
				return new Date();
			}
			else if (this.isUpsert) {
				return { $setOnInsert: new Date };
			}
			else {
				this.unset();
			}
		},
		optional: true
	},
	updatedAt: {
		type: Date,
		autoValue: function () {
			if (this.isUpdate) {
				return new Date();
			}
		},
		denyInsert: true,
		optional: true
	},
	createdBy: {
		type: String,
		autoValue: function () {
			if (this.isInsert) {
				if (this.userId != null) {
					return this.userId
				} else {
					return this.value
				}
			}
		},
		optional: true
	}
}
