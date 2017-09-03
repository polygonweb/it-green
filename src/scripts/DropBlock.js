import $ from 'jquery'

function DropBlock(options) {
  if (!options.element) {
    return false;
  };

  var self = this;

  self.element = options.element;
  self.trigger = options.trigger;
  self.dropElement = options.dropElement;
  self.activeClass = options.activeClass || 'active';

  self.onOpen = options.onOpen || null;
  self.onClose = options.onClose || null;

  self.onClick = self.onClick.bind(self);

  $(self.trigger).on('click', function(e) {
    e.preventDefault();
    self.toggle();
  });

  if(options.isOpen !== undefined) {
    self.isOpen = options.isOpen
  } else {
    self.isOpen = false;
  };

  self.isOpen ? self.open() : self.close();
}


DropBlock.prototype.onClick = function (event) {
  var self = this;
  if (!self.element.contains(event.target)) {
    self.close();
  };
};


DropBlock.prototype.open = function () {
  var self = this;

  $(self.element).addClass(self.activeClass);
  self.isOpen = true;

  if (typeof self.onOpen === 'function') {
    self.onOpen(self.element, self.trigger, self.dropElement);
  };

  $(document).on('click', self.onClick);
};


DropBlock.prototype.close = function () {
  var self = this;

  $(self.element).removeClass(self.activeClass);
  self.isOpen = false;

  if (typeof self.onClose === 'function') {
    self.onClose(self.element, self.trigger, self.dropElement);
  };

  $(document).off('click', self.onClick);
};


DropBlock.prototype.toggle = function () {
  (this.isOpen) ? (this.close()) : (this.open());
};

export default DropBlock;
