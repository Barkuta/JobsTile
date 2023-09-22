import React, { Component } from "react";

type IUser = {
  name: string;
  age: number;
};

type IProps = {
  user: IUser;
};

export const FirstComponent = React.memo(({ name, age }: IUser) => (
  <div>
    my name is {name}, my age is {age}
  </div>
));

export const SecondComponent = React.memo(({ user: { name, age } }: IProps) => (
  <div>
    my name is {name}, my age is {age}
  </div>
));

export class ThirdComponent extends Component<IUser> {
  shouldComponentUpdate(nextProps: IUser) {
    return (
      nextProps.name !== this.props.name || nextProps.age !== this.props.age
    );
  }

  render() {
    return (
      <div>
        my name is {this.props.name}, my age is {this.props.age}
      </div>
    );
  }
}

export class FourthComponent extends Component<IProps> {
  shouldComponentUpdate(nextProps: IProps) {
    return (
      nextProps.user.name !== this.props.user.name ||
      nextProps.user.age !== this.props.user.age
    );
  }

  render() {
    return (
      <div>
        my name is {this.props.user.name}, my age is {this.props.user.age}
      </div>
    );
  }
}
