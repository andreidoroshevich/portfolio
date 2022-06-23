import React from 'react';

type ProjectDescriptorType={
    title: any
}

const ProjectDescriptor = (props: ProjectDescriptorType) => {
    return (
            <div>
                <li>
                    {props.title}
                </li>
            </div>


    );
};

export default ProjectDescriptor;