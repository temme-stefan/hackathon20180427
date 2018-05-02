<template>
    <div class="numberFormGroup form-group row">
        <label :for="id"
               class="col-form-label offset-sm-2 col-sm-2">{{config.label}}</label>
        <div class="input-group col-sm-4">
            <input type="number" class="form-control" :id="id"
                   :value="value"
                   :step="1/(10**(config.digits?config.digits:0))"
                   :min="config.min"
                   :max="config.max"
            />
            <div class="unit input-group-append">

                <span v-if="config.unit" class="input-group-text">{{config.unit}}</span>

                <button class="btn btn-outline-secondary" @click="plusClicked"><span
                        class="fa fa-plus"></span></button>
                <button class="btn btn-outline-secondary" @click="minusClicked"><span
                        class="fa fa-minus"></span></button>
            </div>
        </div>
    </div>
</template>


<script>

    export default {
        name: 'NumberFormGroup',
        props: {
            'config': {type: Object, default: {}},
            'id': {type: String, default: ''}
        },

        data: () => ({
            defaults: {
                min: null,
                max: null,
                step: 1,
                digits: 0,
                unit: '',
                label: ''
            }
        }),
        methods: {
            plusClicked: function (ev) {
                this.value = this.round(this.value + this.config.step)
            },
            minusClicked: function (ev) {
                this.value = this.round(this.value - this.config.step)
            },
            round: function (v) {
                let parsed = Number.parseFloat(v);
                const min = this.getConfig('min');
                if (min != null) {
                    parsed = Math.max(min, parsed);
                }
                const max = this.getConfig('max');
                if (max != null) {
                    parsed = Math.min(max, parsed);
                }
                parsed = Number.parseFloat(parsed.toFixed(this.getConfig('digits')));

                return parsed;
            },
            getConfig: function (key) {
                return this.config[key] != null ? this.config[key] : this.defaults[key];
            }
        }
    }
</script>

<style scoped>
    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

</style>