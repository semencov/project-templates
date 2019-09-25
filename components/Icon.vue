<template>
  <span :aria-label="ariaLabel" v-html="svg"></span>
</template>

<script>
  import classNames from 'classnames';

  export default {
    name: 'Icon',
    props: {
      name: {
        required: true,
        default: 'settings',
      },
      ariaLabel: {
        type: String,
        default: 'icon',
      },
      size: {
        type: String,
        default: 'medium',
        validator: value => {
          return value.match(/(small|medium|large)/);
        },
      },
    },

    data() {
      return {
        svg: require(`!!raw-loader!@/assets/icons/${this.name}.svg`).default
      };
    },

    mounted() {
      this.$el.firstChild.className = classNames('icon', `icon--${this.size}`, `icon--${this.name}`);
      this.$el.firstChild.removeAttribute('height');
      this.$el.firstChild.removeAttribute('width');
    },
  };
</script>

<style lang="postcss">
  .icon {
    &--medium {
      width: theme('width.l');
      height: theme('width.l');
    }

    &--small {
      width: theme('width.m');
      height: theme('width.m');
    }

    &--large {
      width: theme('width.xl');
      height: theme('width.xl');
    }
  }
</style>
